vue_component('form-layout-group', {
    props: ['inst', 'items'],
    template: `
        <fieldset>
            <legend><slot name="legend">Some Label</slot></legend>
            <form-layout-basic :items />
        </fieldset>    
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
