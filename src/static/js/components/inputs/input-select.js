vue_component('input-select', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'options', 'label', 'disabled', 'readonly'],
    template: `
        <select v-form-control-id v-on:input="input">
            <option v-for="item in local_items" v-bind:key="item.key" v-bind:value="item.key" v-bind:selected="(item.value === modelValue)">
                {{ item.label }}
            </option>
        </select>
    `,
    data: function () {
        return {
            local_items: [],
        };
    },
    watch: {
        options: {
            immediate: true,
            handler: function () {
                const item_to_key = new Map(this.local_items.map(v => [v.orig, v.key]));
                this.local_items = this.options.map(function (item) {
                    return {
                        key: item_to_key.get(item) ?? random_html_id(),
                        value: item.value,
                        label: item.label,
                        orig: item,
                    };
                });
            },
        },
    },
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', this.local_items.find(v => v.key === event.target.value)?.value ?? null);
        },
    }
});
