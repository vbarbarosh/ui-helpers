vue_component('input-textarea', {
    emits: ['update:modelValue'],
    props: ['modelValue'],
    template: `
        <textarea v-on:input="input" v-bind:value="modelValue" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});
