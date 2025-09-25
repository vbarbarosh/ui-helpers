vue_component('button-form', {
    emits: [],
    props: ['value', 'type', 'save', 'remove'],
    template: `
        <button v-on:click="click" class="w25 h25 vm cur-pointer xbutton">
            <svg-icon-form class="db ww hh" />
        </button>
    `,
    data: function () {
        return {};
    },
    computed: {
    },
    watch: {
    },
    methods: {
        click: async function () {
            const {type, save, remove} = this;
            await modal_form({form: JSON.parse(JSON.stringify(this.value)), type, save, remove}).promise();
        },
    },
    created: function () {
    },
    unmounted: function () {
    },
});
