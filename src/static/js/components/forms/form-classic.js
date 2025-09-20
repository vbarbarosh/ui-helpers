vue_component('form-classic', {
    props: ['modelValue', 'items'],
    template: `
        <div class="red">
            <slot />
        </div>
        <div class="mg10">
            <form-classic-item v-for="item in local_items" v-bind:key="item.key" v-bind:item="item" />
        </div>
    `,
    data: function () {
        return {
            local_items: [],
        };
    },
    watch: {
        items: {
            immediate: true,
            handler: function () {
                const _this = this;
                const item_to_id = new Map(this.local_items.map(v => [v.orig, v.id]));
                this.local_items = this.items.map(function (item) {
                    const id = item_to_id.get(item) ?? random_html_id();
                    return {
                        id,
                        key: id,
                        type: item.type,
                        get value() { return _this.modelValue[item.path]; },
                        set value(next) { _this.modelValue[item.path] = next; },
                        get root_value() { return _this.modelValue; },
                        label: item.label,
                        path: item.path,
                        orig: item,
                    };
                });
            },
        },
    },
});
