vue_component('form-label', {
    inject: {form_item_id: {default: null}},
    template: `
        <label v-bind:for="form_item_id"><slot /></label>
    `,
});
