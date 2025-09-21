vue_component('form-type', {
    props: ['type'],
    inject: ['form_types'],
    _template: `
        <slot name="foo">
            <el-select v-model="slot.value" v-bind:id="slot.id" v-bind="slot.other">
                <slot />
            </el-select>
        </slot>
    `,
    render: function () {
        return [];
    },
    created: function () {
        const __this = this;
        this.form_types[this.type] = {
            emits: ['update:modelValue'],
            props: ['modelValue', 'id', 'other'],
            render: function () {
                const _this = this;
                return __this.$slots.default({
                    id: this.id,
                    other: this.other,
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
