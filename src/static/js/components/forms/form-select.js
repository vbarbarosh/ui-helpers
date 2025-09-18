vue_component('form-select', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'options', 'label'],
    template: `
        <select @input="input" :value="computed_index">
            <option v-for="option, index in options" :value="index">
                {{ option.label }}
            </option>
        </select>
    `,
    computed: {
        computed_index: function () {
            return this.options.findIndex(v => v.value === this.modelValue);
        },
    },
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', this.options[event.target.value]?.value ?? null);
        },
    }
});
