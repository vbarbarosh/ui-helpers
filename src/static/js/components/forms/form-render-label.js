vue_component('form-render-label', {
    props: ['value', 'item'],
    template: `
        <label :for="item.id">{{ item.label }}</label>   
    `,
});
