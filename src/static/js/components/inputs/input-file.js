vue_component('input-file', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-control-id v-on:input="input" type="file" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.files[0]);
        },
    },
});
