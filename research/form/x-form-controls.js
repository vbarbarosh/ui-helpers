vue_component('x-input-text', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-on:input="input"
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
        <textarea v-on:input="input"
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

vue_component('x-input-email', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-on:input="input"
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

vue_component('x-input-password', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-on:input="input"
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

vue_component('x-input-checkbox', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'disabled', 'readonly'],
    template: `
        <input v-on:input="input"
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
        <input v-on:input="input"
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
        <input v-on:input="input"
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

// input-color.js
// input-date.js
// input-email.js
// input-file.js
// input-file-drop-zone.js
// input-files.js
// input-files-drop-zone.js
// input-int.js
// input-month.js

// input-radio.js
// input-radios.js
// input-range.js
// input-search.js
// input-select.js
// input-select-many.js
// input-select-v1.js.txt
// input-string.js
// input-tel.js
// input-text.js
// input-textarea.js
// input-time.js
// input-url.js
// input-week.js
