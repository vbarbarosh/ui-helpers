vue_component('input-checkboxes', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'options', 'label', 'disabled', 'readonly'],
    template: `
        <div class="input-checkboxes__root">
            <label v-for="item in local_items" v-bind:key="item.key" class="flex-row-center-left gap5 cur-pointer">
                <input v-on:input="input($event, item)" v-bind:checked="item.checked" type="checkbox">
                <span>{{ item.label }}</span>
            </label>
        </div> 
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
                        checked: selection.has(item.value),
                        orig: item,
                    };
                });
            },
        },
    },
    methods: {
        input: function (event, item) {
            if (event.target.checked) {
                if (!Array.isArray(this.modelValue)) {
                    this.$emit('update:modelValue', [item.value]);
                }
                else {
                    const i = this.modelValue.indexOf(item.value);
                    if (i === -1) {
                        this.modelValue.push(item.value);
                    }
                }
            }
            else {
                if (!Array.isArray(this.modelValue)) {
                    this.$emit('update:modelValue', []);
                }
                else {
                    const i = this.modelValue.indexOf(item.value);
                    if (i !== -1) {
                        this.modelValue.splice(i, 1);
                    }
                }
            }
        },
    }
});

css`
    .input-checkboxes__root {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 10px;
    }
`;
