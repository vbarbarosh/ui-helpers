vue_component('input-tel', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-control-id v-on:input="input" v-bind:value="modelValue" type="tel" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});
