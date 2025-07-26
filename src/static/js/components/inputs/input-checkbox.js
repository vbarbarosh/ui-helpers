vue_component('input-checkbox', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    inject: {form_item_id: {default: null}},
    template: `
        <input v-on:input="input" v-bind:checked="modelValue" v-bind:id="form_item_id" type="checkbox" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.checked);
        },
    },
});
