// [form] is already taken by html. [form-box] is alternative.
vue_component('form-box', {
    props: ['modelValue', 'layout'],
    inheritAttrs: false,
    inject: ['form_types'],
    provide: function () {
        return {
            form_value: this.modelValue,
            form_items: {
                add: inst => this.items.push(inst),
                remove: inst => this.items.splice(this.items.indexOf(inst) >>> 0, 1),
            },
        };
    },
    template: `
        <div class="red">
            <form-item v-bind:type="(layout ?? 'layout-table')"><slot /></form-item>
        </div>
        <form-launcher :items="gogogo_v1" />
    `,
    data: function () {
        return {
            items: [],
        };
    },
    computed: {
        gogogo_v1: function () {
            const _this = this;

            const db = [];
            this.items.forEach(form_item => walk(null, form_item, this.form_types));

            // db -> virtual_items -> final_cells
            return query_db_items({parent: null}).flatMap(load_virtual_items).map(v => make_final_cell(v));

            function load_virtual_items(db_item) {
                const local_type = db_item.local_types[db_item.form_item.type];
                if (local_type?.load_virtual_items) {
                    const ctx = {db_item, query_db_items, query_virtual_items, make_virtual_item};
                    return local_type.load_virtual_items(ctx);
                }
                return make_virtual_item();
                function make_virtual_item(props) {
                    const {type, path, label, help, placeholder, id} = db_item.form_item;
                    return {db_item, type, path, label, help, placeholder, id, ...props};
                }
            }

            function walk(parent, form_item, parent_types) {
                const local_types = {...parent_types, ...parent_types[form_item.type]?.types};
                db.push({parent, form_item, local_types});
                form_item.child_items.forEach(child => walk(form_item, child, local_types));
            }

            function query_db_items(expr) {
                return expr.self
                    ? db.filter(v => v.form_item === expr.self)
                    : db.filter(v => v.parent === expr.parent);
            }
            function query_virtual_items(expr_db_items) {
                return query_db_items(expr_db_items).flatMap(load_virtual_items);
            }
            function query_final_cells(expr_db_items, overrides) {
                return query_db_items(expr_db_items).flatMap(load_virtual_items).map(v => make_final_cell(v, overrides));
            }

            function make_final_cell(virtual_item, overrides) {
                overrides ??= {};
                overrides.final ??= (x,v) => v;
                const ctx = {
                    virtual_item,
                    query_db_items,
                    query_virtual_items,
                    query_final_cells,
                    render_model_value_props,
                    render_jack_hack_slots,
                };
                if (virtual_item.db_item.local_types[virtual_item.type]?.make_final_cell) {
                    const tmp = virtual_item.db_item.local_types[virtual_item.type].make_final_cell(virtual_item);
                    return overrides.final(virtual_item, tmp);
                }
                if (virtual_item.label) {
                    return overrides.final(virtual_item, {
                        insertions: {
                            source: 'P1',
                            label: (props, slots) => render_label(props, slots),
                            control: (props, slots) => render_control(props, slots),
                        },
                    });
                }
                return overrides.final(virtual_item, {
                    insertions: {
                        source: 'P2',
                        container: (props, slots) => render_control(props, slots),
                    },
                });
                function render_label(props, slots) {
                    return Vue.h('label', {for: virtual_item.id, ...props}, virtual_item.label);
                }
                function render_control(props, slots) {
                    if (virtual_item.db_item.local_types[virtual_item.type]?.render) {
                        return virtual_item.db_item.local_types[virtual_item.type].render(ctx);
                    }
                    const component = virtual_item.db_item.local_types[virtual_item.type]?.component ?? virtual_item.db_item.local_types[virtual_item.type];
                    if (typeof component !== 'string') {
                        return Vue.h('DIV', {class: 'yellow'}, [`⚠️ no type: [${virtual_item.type}]`]);
                    }
                    const tmp = {...render_model_value_props(), ...render_attr_props(), ...virtual_item.props};
                    return Vue.h(Vue.resolveComponent(component), tmp, render_jack_hack_slots());
                }
                function render_model_value_props() {
                    if (!virtual_item.path || !_this.modelValue) {
                        return {
                            modelValue: virtual_item.db_item.form_item.modelValue,
                            'onUpdate:modelValue': v => virtual_item.db_item.form_item.$emit('update:modelValue', v),
                        };
                    }
                    const modelValue = _this.modelValue?.[virtual_item.path];
                    const updateModelValue = !_this.modelValue ? () => 0 : v => _this.modelValue[virtual_item.path] = v;
                    return {modelValue, 'onUpdate:modelValue': updateModelValue};
                }
                function render_attr_props() {
                    // Small typo in a template, could lead to a cryptic error message:
                    //                             🚧____🚧
                    // <x-form-item path="check_me_out"" type="checkbox" label="Check me out" />
                    // ⚠️ Failed to execute 'setAttribute' on 'Element': '"' is not a valid attribute name.
                    const out = {...virtual_item.db_item.form_item.$attrs};
                    delete out['"'];
                    return out;
                }
                function render_jack_hack_slots() {
                    return {
                        jack_hack_label_id: function (obj) {
                            obj.id = virtual_item.id;
                            return [];
                        },
                    };
                }
            }
        },
    },
});
