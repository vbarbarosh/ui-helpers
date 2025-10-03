vue_component('form-layout-tabs', {
    props: ['items'],
    template: `
        <tabs>
            <tabs-item v-for="item in items" v-bind:key="item.key" v-bind:label="item.inst.label">
                <render-function :fn="(item.inst.insertions.container ?? item.inst.insertions.control)" />
            </tabs-item>
        </tabs>
    `,
});
