vue_component('layout-columns', {
    props: ['items', 'cols'],
    template: `
        <div class="flex-row gap10">
            <template v-for="ci in computed_items" v-bind:key="ci.key">
                <template v-if="ci.orig.inst.insertions.container">
                    <div v-bind:style="ci.style">
                        <render-function :fn="ci.orig.inst.insertions.container" />
                    </div>
                </template>
                <template v-else-if="(ci.orig.inst.insertions.label && ci.orig.inst.insertions.control)">
                    <div v-bind:style="ci.style" class="flex-col gap5">
                        <render-function :fn="ci.orig.inst.insertions.label" />
                        <render-function :fn="ci.orig.inst.insertions.control" />
                    </div>
                </template>
                <template v-else>
                    <warn-invalid-layout-item-type :item="ci.orig" />
                </template>
            </template>
        </div>
    `,
    computed: {
        computed_items: function () {
            const cols = (this.cols||'1').split(',');
            return this.items.map(function (item, i) {
                return {key: item.key, orig: item, style: `flex: ${cols[i] ?? 1} 0 0; min-width: 0;`};
            });
        },
    },
});
