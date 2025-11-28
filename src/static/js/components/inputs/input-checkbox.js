vue_component('input-checkbox', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-control-id v-on:input="input" v-bind:checked="modelValue" type="checkbox" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.checked);
        },
    },
});
