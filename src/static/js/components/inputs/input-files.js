vue_component('input-files', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-control-id v-on:input="input" type="file" multiple />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.files);
        },
    },
});
