vue_component('form-classic', {
    props: ['modelValue', 'items'],
    template: `
        <div class="red">
            <slot />
        </div>
        <div class="mg10">
            <div v-for="item in local_items" :key="item.key" class="flex-col flex-align-stretch">
                <form-render-label :value="modelValue" :item />
                <form-render-control :value="modelValue" :item />
            </div>
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
                        label: item.label,
                        path: item.path,
                        orig: item,
                    };
                });
            },
        },
    },
});
