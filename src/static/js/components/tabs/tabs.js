vue_component('tabs', {
    props: ['items'],
    template: `
        <div class="tabs">
            <div class="tab-header">
                <div v-for="item in local_items"
                        v-on:click="click_tab(item)"
                        v-bind:key="item.uid"
                        v-bind:class="{active: item.active}" class="tab-button">
                    {{ item.label }}
                </div>
            </div>
            <tabs-item v-for="item in (items||[])" v-bind:label="item.label">
                <template v-if="item.component">
                    <component v-if="item.component.is" v-bind:is="item.component.is" v-bind="without(item.component, 'is')" />
                    <component v-else v-bind:is="item.component" />
                </template>
                <template v-else>
                    <p>No content for {{ item.label }}</p>
                </template>
            </tabs-item>
            <slot />
        </div>
    `,
    provide: function () {
        return {
            tabs: this,
        };
    },
    data: function () {
        return {
            local_items: [],
        };
    },
    computed: {
        active: function () {
            return this.local_items.find(v => v.active);
        },
    },
    methods: {
        without: function (obj, prop) {
            const {[prop]: _, ...out} = obj;
            return out;
        },
        tabs_add: function (inst) {
            const out = {
                uid: crypto.randomUUID(),
                label: inst.label,
                active: !this.local_items.some(v => v.active),
                inst,
            };
            this.local_items.push(out);
            return out;
        },
        tabs_remove: function (inst) {
            const i = this.local_items.findIndex(v => v.inst === inst);
            if (i !== -1) {
                this.local_items.splice(i, 1);
            }
        },
        click_tab: function (tab) {
            this.local_items.forEach(v => v.active = (v === tab));
        },
    },
});

css`
    .tabs {
        background: white;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .tab-header {
        display: flex;
        border-bottom: 1px solid #ddd;
    }

    .tab-button {
        padding: 12px 20px;
        cursor: pointer;
        background: #f1f1f1;
        border: none;
        margin-right: 5px;
        border-radius: 5px 5px 0 0;
        transition: all 0.3s;
    }

    .tab-button:hover {
        background: #ddd;
    }

    .tab-button.active {
        background: #4CAF50;
        color: white;
    }

    .tab-content {
        padding: 20px;
    }
`;
