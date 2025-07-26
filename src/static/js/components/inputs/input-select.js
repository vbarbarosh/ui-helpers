vue_component('input-select', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly', 'options'],
    inject: {form_item_id: {default: null}},
    template: `
        <select v-on:input="input" v-bind:value="modelValue" v-bind:id="form_item_id">
            <option v-for="option in computed_options" v-bind:value="option.value" v-bind:disabled="option.disabled">
                {{ option.label }}
            </option>
        </select>
    `,
    computed: {
        computed_options: function () {
            if (typeof this.options === 'string') {
                return this.options.split(',').map(function (label) {
                    return {label: label, value: label};
                });
            }
            return this.options;
        },
    },
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});
