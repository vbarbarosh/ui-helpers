vue_component('form-layout-columns', {
    props: ['cols'],
    inject: {
        form_items_parent: {from: 'form_items'},
    },
    provide: function () {
        return {
            form_items: this.form_items,
        };
    },
    template: '<slot />',
    data: function () {
        return {
            form_items: [],
        };
    },
    methods: {
        render_container: function () {
            // <form-classic-item v-for="item in form_items" v-bind:key="item.key" v-bind:item="item" />
            return Vue.h('DIV', {class: 'flex-row gap10'}, this.form_items.map(function (item) {
                return Vue.h(Vue.resolveComponent('form-classic-item'), {key: item.key, item});
            }));
        },
    },
    created: function () {
        this.form_items_parent.push({key: random_html_id(), inst: this, container: true});
    },
    unmounted: function () {
        const i = this.form_items_parent.findIndex(v => v.inst === this);
        if (i !== -1) {
            this.form_items_parent.splice(i, 1);
        }
    },
});
