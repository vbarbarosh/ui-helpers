vue_component('form-render-control', {
    props: ['value', 'item'],
    inject: ['form_types'],
    template: `
        <component v-if="form_types[item.type]"
                   v-model="item.value"
                   v-bind:is="form_types[item.type]"
                   v-bind:id="item.id"
                   v-bind="computed_props" />
    `,
    computed: {
        computed_props: function () {
            const reserved = {is: 1, type: 1, path: 1, label: 1};
            return Object.fromEntries(Object.entries(this.item.orig).filter(v => !reserved[v[0]]));
        },
    },
});
