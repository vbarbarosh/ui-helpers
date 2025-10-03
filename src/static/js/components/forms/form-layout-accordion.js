vue_component('form-layout-accordion', {
    props: ['items'],
    template: `
        <div>
            🚧 Not Implemented 🚧
        </div>
    `,
    data: function () {
        return {
            open: false,
        };
    },
    methods: {
        click_expand: function () {
            this.open = true;
        },
        click_collapse: function () {
            this.open = false;
        },
    },
});
