vue_component('input-radios', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'id', 'options', 'label', 'disabled', 'readonly'],
    template: `
        <div class="input-radios__root">
            <label v-for="item in local_items" v-bind:key="item.key" class="flex-row-center-left gap5 cur-pointer">
                <input v-on:input="input(item)" v-bind:id="id" v-bind:checked="(modelValue === item.value)" type="radio">
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
        input: function (item) {
            this.$emit('update:modelValue', item.value);
        },
    }
});

css`
    .input-radios__root {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 10px;
    }
`;
