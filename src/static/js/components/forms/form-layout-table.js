vue_component('form-layout-table', {
    props: ['items'],
    template: `
        <table>
            <thead>
            </thead>
            <tbody>
                <template v-for="item in items" v-bind:key="item.key">
                    <template v-if="item.inst.insertions.layout_table_tr">
                        <render-function :fn="item.inst.insertions.layout_table_tr" />
                    </template>
                    <template v-else-if="item.inst.insertions.layout_table_tr2">
                        <tr>
                            <render-function :fn="item.inst.insertions.layout_table_tr2" />
                        </tr>
                    </template>
                    <template v-else-if="item.inst.insertions.container">
                        <tr>
                            <td colspan="2">
                                <render-function :fn="item.inst.insertions.container" />
                            </td>
                        </tr>
                    </template>
                    <template v-else-if="(item.inst.insertions.label && item.inst.insertions.control)">
                        <tr>
                            <th><render-function :fn="item.inst.insertions.label" /></th>
                            <td><render-function :fn="item.inst.insertions.control" /></td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr>
                            <td colspan="2">
                                ⚠️ Unrecognized insertions: {{ win.Object.keys(item.inst.insertions) }}
                            </td>
                        </tr>
                    </template>
                </template>
            </tbody>
        </table>
    `,
});
