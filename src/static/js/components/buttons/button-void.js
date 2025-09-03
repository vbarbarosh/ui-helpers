vue_component('button-void', {
    emits: [],
    props: [],
    template: `
        <button class="xbutton"><slot>Button</slot></button>
    `,
    data: function () {
        return {};
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created: function () {
    },
    unmounted: function () {
    },
});
