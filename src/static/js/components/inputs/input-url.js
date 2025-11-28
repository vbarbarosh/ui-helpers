vue_component('input-url', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-control-id v-on:input="input" v-bind:value="modelValue" type="url" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});
