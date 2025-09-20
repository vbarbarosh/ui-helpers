vue_component('form-item', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'type', 'label'],
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
            const _this = this;
            if (this.$slots.default) {
                return this.$slots.default({id: this.id});
            }
            if (this.type) {
                const item = {
                    id: this.id,
                    key: this.id,
                    type: this.type,
                    get value() { return _this.modelValue; },
                    set value(next) { _this.$emit('update:modelValue', next); },
                    get root_value() { return _this.modelValue; },
                    label: this.label,
                    path: null,
                    orig: {},
                }
                return Vue.h(Vue.resolveComponent('form-render-control'), {item});
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
