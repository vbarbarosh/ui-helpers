vue_component('input-radio', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly', 'name', 'option'],
    inject: {form_item_id: {default: null}},
    template: `
    <input v-on:input="input"
           v-bind:id="form_item_id"
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
