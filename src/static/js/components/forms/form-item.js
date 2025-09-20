vue_component('form-item', {
    props: ['label'],
    inject: ['form_items'],
    render: function () {
        return [];
    },
    provide: function () {
        return {
            form_item_id: this.id,
        };
    },
    data: function () {
        return {
            id: random_html_id(),
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
        render_label: function () {
            if (this.$slots.label_outer) {
                return this.$slots.label_outer({id: this.id});
            }
            if (this.$slots.label) {
                return Vue.h('label', {for: this.id}, this.$slots.label());
            }
            return Vue.h('label', {for: this.id}, this.label);
        },
        render_control: function () {
            if (this.$slots.default) {
                return this.$slots.default({id: this.id});
            }
        },
    },
    created: function () {
        this.form_items.push({key: random_html_id(), inst: this});
    },
    unmounted: function () {
        const i = this.form_items.findIndex(v => v.inst === this);
        if (i !== -1) {
            this.form_items.splice(i, 1);
        }
    },
});
