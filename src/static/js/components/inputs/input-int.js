vue_component('input-int', {
    emits: ['update:modelValue'],
    props: ['modelValue'],
    template: `
        <input v-on:input="input" v-bind:value="modelValue" type="number" />
    `,
    methods: {
        input: function (event) {
            this.$emit('update:modelValue', parseInt(event.target.value));
        },
    },
});
