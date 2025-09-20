vue_component('form-type', {
    props: ['type'],
    inject: ['form_types'],
    render: function () {
        return [];
    },
    created: function () {
        const __this = this;
        this.form_types[this.type] = {
            emits: ['update:modelValue'],
            props: ['modelValue', 'id'],
            render: function () {
                const _this = this;
                return __this.$slots.default({
                    id: this.id,
                    get value() { return _this.modelValue; },
                    set value(next) { _this.$emit('update:modelValue', next); },
                });
            },
        };
    },
    unmounted: function () {
        delete this.form_types[this.type];
    },
});
