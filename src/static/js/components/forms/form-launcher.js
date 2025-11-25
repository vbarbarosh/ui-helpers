vue_component('form-launcher', {
    props: ['items'],
    template: `
        <template v-for="item in items">
            <render-function v-if="item.insertions.container" :fn="item.insertions.container" />
        </template>
    `,
});
