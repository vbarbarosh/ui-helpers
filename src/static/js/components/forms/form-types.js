vue_component('form-types', {
    props: ['types'],
    provide: function () {
        return {
            form_types: {
                'layout-table': {
                    render: function (ctx) {
                        const overrides = {
                            render_label: function (db_item, props, slots) {
                                return Vue.h('label', {for: db_item.form_item.id, ...props}, db_item.form_item.label);
                            },
                            final: function (db_or_virtual_item, final_cell) {
                                if ((db_or_virtual_item.type ?? db_or_virtual_item.form_item.type) === 'checkbox' && final_cell.insertions.label && final_cell.insertions.control) {
                                    return {
                                        insertions: {
                                            label: () => [],
                                            control: () => Vue.h('DIV', {class: 'flex-row-center-left gap5'}, {
                                                default: () => [final_cell.insertions.control(), final_cell.insertions.label()],
                                            }),
                                        },
                                    };
                                }
                                return final_cell;
                            },
                        };
                        const final_cells = ctx.query_final_cells({parent: ctx.virtual_item.db_item.form_item}, overrides);
                        return Vue.h(Vue.resolveComponent('form-layout-table'), {items: final_cells});
                    },
                },
                checkbox: {
                    render: function (ctx) {
                        const props = {...ctx.render_model_value_props(), id: (ctx.virtual_item ? ctx.virtual_item.id : ctx.db_item.form_item.id)};
                        return Vue.h(Vue.resolveComponent('input-checkbox'), props);
                    },
                },
                checkboxes: 'input-checkboxes',
                color: 'input-color',
                date: 'input-date',
                email: 'input-email',
                file: 'input-file',
                files: 'input-files',
                int: 'input-int',
                month: 'input-month',
                password: 'input-password',
                radio: 'input-radio',
                radios: 'input-radios',
                range: 'input-range',
                search: 'input-search',
                select: 'input-select',
                'select-many': 'input-select-many',
                string: 'input-string',
                tel: 'input-tel',
                text: 'input-text',
                textarea: 'input-textarea',
                time: 'input-time',
                url: 'input-url',
                week: 'input-week',
                ...this.types,
            },
        };
    },
    template: `<slot />`,
});
