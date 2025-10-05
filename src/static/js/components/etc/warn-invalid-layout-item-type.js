vue_component('warn-invalid-layout-item-type', {
    props: ['item'],
    template: `
        <span>⚠️ Unknown item type: [{{ item.type }}]</span>
    `,
});
