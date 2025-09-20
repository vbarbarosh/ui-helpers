vue_component('form-render-label', {
    props: ['value', 'item'],
    template: `
        <label v-bind:for="item.id">{{ item.label }}</label>
    `,
});
