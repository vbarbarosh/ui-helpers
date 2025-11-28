vue_component('input-int', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly', 'min', 'max'],
    template: `
        <input v-form-control-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:min="min"
               v-bind:max="max"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="number" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', parseInt(event.target.value));
        },
    },
});
