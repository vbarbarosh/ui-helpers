vue_component('input-date', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    inject: {form_item_id: {default: null}},
    template: `
        <input v-on:input="input" v-bind:value="modelValue" v-bind:id="form_item_id" type="date" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});
