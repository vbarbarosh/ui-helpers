vue_component('form-render-control', {
    props: ['value', 'item'],
    inject: ['form_types'],
    template: `
        <component v-if="form_types[item.type]" :is="form_types[item.type]" v-model="item.value" />
    `,
});
