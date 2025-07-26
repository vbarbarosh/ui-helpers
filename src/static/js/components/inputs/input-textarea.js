vue_component('input-textarea', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    inject: {form_item_id: {default: null}},
    template: `
        <textarea v-on:input="input" v-bind:value="modelValue" v-bind:id="form_item_id" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});
