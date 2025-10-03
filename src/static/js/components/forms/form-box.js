vue_component('form-box', {
    props: ['modelValue', 'layout'],
    inheritAttrs: false,
    provide: function () {
        return {
            form_value: this.modelValue,
            form_items: {
                add: inst => this.items.push({key: crypto.randomUUID(), inst}),
                remove: inst => this.items.splice(this.items.findIndex(v => v.inst === inst) >>> 1, 1),
            },
        };
    },
    template: `
        <div class="red">
            <slot />
        </div>
        <component v-slot="slot" v-bind:is="(layout ?? 'layout-basic')" :items v-bind="$attrs">
            <template v-if="slot.item.inst.render_layout">
                <render-function v-slot="slot2" :fn="slot.item.inst.render_layout">
                    <!--<layout-basic :items="slot2.items" />-->
                    ggg
                </render-function>
            </template>
        </component>
    `,
    data: function () {
        return {
            items: [],
        };
    },
});
