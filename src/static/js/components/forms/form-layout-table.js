// - label
// - control
// - container
// - layout_table_tr
// - layout_table_tr2
vue_component('form-layout-table', {
    props: ['items'],
    template: `
        <table>
            <thead>
            </thead>
            <tbody>
                <template v-for="item in items" v-bind:key="item.key">
                    <template v-if="item.insertions.layout_table_tr">
                        <render-function :fn="item.insertions.layout_table_tr" />
                    </template>
                    <template v-else-if="item.insertions.layout_table_tr2">
                        <tr>
                            <render-function :fn="item.insertions.layout_table_tr2" />
                        </tr>
                    </template>
                    <template v-else-if="item.insertions.container">
                        <tr>
                            <td colspan="2">
                                <render-function :fn="item.insertions.container" />
                            </td>
                        </tr>
                    </template>
                    <template v-else-if="(item.insertions.label && item.insertions.control)">
                        <tr>
                            <th><render-function :fn="item.insertions.label" /></th>
                            <td><render-function :fn="item.insertions.control" /></td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr>
                            <td colspan="2">
                                ⚠️ Unrecognized insertions: {{ win.Object.keys(item.insertions) }}
                            </td>
                        </tr>
                    </template>
                </template>
            </tbody>
        </table>
    `,
});
