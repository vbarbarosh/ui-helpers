vue_component('form-type-component', {
    props: ['value', 'item'],
    inject: ['form_types'],
    template: `
        <div>{{form_types[item.type]}}</div>
        <component v-if="form_types[item.type]" :is="form_types[item.type]" :value :item />
    `,
});
