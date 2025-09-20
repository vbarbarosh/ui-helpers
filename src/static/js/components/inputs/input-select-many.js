vue_component('input-select-many', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'options', 'label', 'disabled', 'readonly'],
    template: `
        <select v-on:input="input" multiple>
            <option v-for="item in local_items" v-bind:key="item.key" v-bind:value="item.key" v-bind:selected="item.selected">
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
                const selection = new Set(this.modelValue ?? []);
                this.local_items = this.options.map(function (item) {
                    return {
                        key: item_to_key.get(item) ?? random_html_id(),
                        value: item.value,
                        label: item.label,
                        selected: selection.has(item.value),
                        orig: item,
                    };
                });
            },
        },
    },
    methods: {
        input: function (event) {
            const key_to_value = new Map(this.local_items.map(v => [v.key, v.value]));
            const values = [...event.target.selectedOptions].map(elem => key_to_value.get(elem.value)).filter(v => v);
            console.log('input', values);
            if (Array.isArray(this.modelValue)) {
                this.modelValue.splice(0, this.modelValue.length, ...values);
            }
            else {
                this.$emit('update:modelValue', values);
            }
        },
    }
});
