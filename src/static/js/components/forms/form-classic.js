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
        <template v-for="item in items">
            <form-type-component :value="modelValue" :item="item" />
        </template>
    `,
});
