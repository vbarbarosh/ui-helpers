vue_component('input-str', {
    emits: ['update:modelValue'],
    props: ['modelValue'],
    template: `
        <input v-on:input="input" v-bind:value="modelValue" type="text" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
});
