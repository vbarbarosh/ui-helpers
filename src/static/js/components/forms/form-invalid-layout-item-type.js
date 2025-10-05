vue_component('form-invalid-layout-item-type', {
    props: ['item'],
    template: `
        <span>⚠️ Unknown item type: [{{ item.type }}]</span>
    `,
});
