vue_component('form-classic', {
    props: ['modelValue', 'items', 'types'],
    provide: function () {
        return {
            form_types: {
                string: 'input-string',
            },
        };
    },
    template: `
        <div class="red">
            <slot />
        </div>
        <div class="mg15">
            <div v-for="item in items" :key="item.key" class="flex-col flex-align-stretch">
                <render-function :fn="item.inst.render_label" :item />
                <render-function :fn="item.inst.render_control" :item />
            </div>
        </div>
        <template v-for="item in items">
            <form-type-component :value="modelValue" :item="item" />
        </template>
    `,
});
