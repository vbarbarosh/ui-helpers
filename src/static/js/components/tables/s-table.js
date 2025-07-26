vue_component('s-table', {
    props: ['items', 'columns', 'headless'],
    template: `
        <table>
            <thead v-if="(headless === undefined || (headless !== '' && !headless))">
                <tr>
                    <th v-for="col in computed_columns" v-bind:key="col.key" v-bind:class="col.class_th">
                        {{ col.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="!items.length" class="c">
                    <td v-bind:colspan="computed_columns.length">
                        <slot name="empty">
                            No items
                        </slot>
                    </td>
                </tr>
                <tr v-for="item in items" v-bind:key="(item.uid || item.pub_id || item.id)" v-bind:class="tr_class(item)">
                    <template v-for="col in computed_columns">
                        <component v-if="col.component_td"
                                   v-bind:is="col.component_td"
                                   v-bind:key="col.key"
                                   v-bind:value="item"
                                   v-bind:class="col.class_td" />
                        <slot v-else-if="col.slot_td" v-bind:name="col.slot_td" v-bind:item="item" />
                        <td v-else v-bind:key="col.key" v-bind:class="col.class_td">
                            <slot v-if="col.slot" v-bind:name="col.slot" v-bind:item="item" />
                            <component v-else-if="col.component" v-bind:is="col.component" v-bind:value="item" />
                            <template v-else>{{ col.read(item) }}</template>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    `,
    computed: {
        computed_columns: function () {
            if (typeof this.columns === 'string') {
                return this.columns.split(',').map(function (label, i) {
                    return mapper({label, read: v => v[label]}, i);
                });
            }
            if (this.columns) {
                return this.columns.map(mapper);
            }
            const keys = [];
            const keys_set = new Set();
            this.items.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (keys_set.has(key)) {
                        return;
                    }
                    keys.push({label: key, read: v => v[key]});
                    keys_set.add(key);
                });
            });
            return keys.map(mapper);
            function mapper(column, i) {
                return {
                    tr_class: column.tr_class || null,
                    key: column.key || column.uid || column.label || `col:${i}`,
                    label: column.label,
                    class_th: `${column.class||''} ${column.class_th||''}`.trim() || null,
                    class_td: `${column.class||''} ${column.class_td||''}`.trim() || null,
                    read: column.read || ignore,
                    slot: column.slot || null,
                    slot_td: column.slot_td || null,
                    component: column.component || null,
                    component_td: column.component_td || (column.component && column.component.endsWith('-td') ? column.component : null),
                };
            }
        },
    },
    methods: {
        tr_class: function (item) {
            const out = {};
            this.computed_columns.forEach(function (col) {
                if (col.tr_class) {
                    const value = (typeof col.tr_class === 'function') ? col.tr_class(item) : col.tr_class;
                    if (typeof value === 'string') {
                        out[value] = true;
                    }
                    else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                        Object.assign(out, value);
                    }
                }
            });
            return out;
        },
    },
});
