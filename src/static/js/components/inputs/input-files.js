vue_component('input-files', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    inject: {form_item_id: {default: null}},
    template: `
        <input v-on:input="input" v-bind:value="modelValue" v-bind:id="form_item_id" type="file" multiple />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});
