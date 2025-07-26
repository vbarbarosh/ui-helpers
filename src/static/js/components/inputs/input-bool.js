vue_component('input-bool', {
    emits: ['update:modelValue'],
    props: ['modelValue'],
    template: `
        <input v-on:input="input" v-bind:checked="modelValue" type="checkbox" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.checked);
        },
    },
});
