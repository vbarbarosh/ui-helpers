vue_component('x-input-search', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="search" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-number', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="number" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-text', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="text" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-textarea', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <textarea v-form-label-id
                  v-on:input="input"
                  v-bind:value="modelValue"
                  v-bind:disabled="disabled"
                  v-bind:readonly="readonly" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-tel', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="tel" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_directive('form-label-id', {
    mounted: function (el, binding) {
        if (binding.instance.$slots.jack_hack_label_id) {
            const obj = {id: '................'};
            binding.instance.$slots.jack_hack_label_id(obj);
            el.setAttribute('id', obj.id);
        }
    },
});

vue_component('x-input-email', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="email" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

// vue_component('jack-hack', {
//     template: `
//         <slot id="a12345" />
//     `,
// });
//
// vue_component('x-input-email', {
//     emits: ['update:modelValue'],
//     props: ['modelValue', 'disabled', 'readonly'],
//     template: `
//         <jack-hack v-slot="slot">
//             <input v-on:input="input"
//                 v-bind:id="slot.id"
//                 v-bind:value="modelValue"
//                 v-bind:disabled="disabled"
//                 v-bind:readonly="readonly"
//                 type="email" />
//         </jack-hack>
//     `,
//     methods: {
//         input: function (event) {
//             this.$emit('update:modelValue', event.target.value);
//         },
//     },
// });

vue_component('x-input-url', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="url" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-password', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="password" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-checkbox', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:checked="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="checkbox" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.checked);
        },
    },
});

vue_component('x-input-radio', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'name', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:checked="Boolean(modelValue)"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               v-bind:name="name"
               type="radio" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.checked);
        },
        change_in_document: function (event) {
            if (event.target === this.$el) {
                return;
            }
            if (event.target.getAttribute('name') !== this.name) {
                return;
            }
            if (this.modelValue === true) {
                this.$emit('update:modelValue', false);
            }
        },
    },
    mounted: function () {
        document.addEventListener('change', this.change_in_document);
    },
    beforeUnmount: function () {
        document.removeEventListener('change', this.change_in_document);
    },
});

vue_component('x-input-color', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="color" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-time', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="time" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-date', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="date" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-month', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="month" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-week', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="week" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-file', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-form-label-id
               v-on:input="input"
               v-bind:value="modelValue"
               v-bind:disabled="disabled"
               v-bind:readonly="readonly"
               type="file" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});

vue_component('x-input-select', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'options', 'disabled', 'readonly'],
    template: `
        <select v-form-label-id v-on:input="input">
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
                this.local_items = this.options?.map(function (item) {
                    return {
                        key: item_to_key.get(item) ?? random_html_id(),
                        label: item.label,
                        value: ('value' in item) ? item.value : item,
                        orig: item,
                    };
                });
            },
        },
    },
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', this.local_items.find(v => v.key === event.target.value)?.value);
        },
    }
});
