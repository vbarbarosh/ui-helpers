vue_component('form-layout-inline-rev', {
    props: ['inst', 'items'],
    template: `
        <template v-for="item in items" :key="item.key">
            <template v-if="item.inst.insertions.container">
                <div><render-function :fn="item.inst.insertions.container" /></div>
            </template>
            <template v-else-if="(item.inst.insertions.label && item.inst.insertions.control)">
                <div class="flex-row-center-left gap5">
                    <render-function :fn="item.inst.insertions.control" />
                    <render-function :fn="item.inst.insertions.label" />
                </div>
            </template>
            <template v-else>
                <warn-invalid-layout-item-type :item />
            </template>
        </template>
    `,
});
