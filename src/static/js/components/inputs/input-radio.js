vue_component('input-radio', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly', 'name', 'option'],
    template: `
    <input v-form-control-id
           v-on:input="input"
           v-bind:checked="(modelValue === option)"
           v-bind:disabled="disabled"
           v-bind:readonly="readonly"
           v-bind:name="name"
           type="radio" />
`,
    methods: {
        input: function (event) {
            if (event.target.checked) {
                this.$emit('update:modelValue', this.option);
            }
        },
    },
});
