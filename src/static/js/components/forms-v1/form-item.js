vue_component('form-item', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'type', 'label', 'layout', 'items'],
    inheritAttrs: false,
    inject: {
        form_value: 'form_value',
        form_types: 'form_types',
        form_items_parent: {from: 'form_items', default: {add: () => 0, remove: () => 0}},
    },
    provide: function () {
        return {
            form_items: {
                add: inst => this.child_items.push({key: crypto.randomUUID(), inst}),
                remove: inst => this.child_items.splice(this.child_items.findIndex(v => v.inst === inst) >>> 1, 1),
            },
        };
    },
    template: `
        <slot>
            <form-item v-for="item in computed_items" v-bind="item" />
        </slot>
    `,
    data: function () {
        let ov = {};
        if (this.$attrs.hack_checkbox !== undefined) {
            ov = {
                label: () => [],
                control: () => {
                    return Vue.h('DIV', {class: 'flex-row-center-left gap5'}, [
                        this.render_control(),
                        this.render_label(),
                    ]);
                }};
        }
        else if (this.form_types[this.type]?.insertions) {
            ov = this.form_types[this.type]?.insertions(this);
        }
        else if (this.form_types[this.layout]?.insertions) {
            ov = this.form_types[this.layout]?.insertions(this);
        }
        return {
            id: `id-${crypto.randomUUID()}`,
            insertions: {
                label: this.render_label,
                control: this.render_control,
                ...((this.label || this.label === '') ? {} : {container: this.render_control}),
                ...(this.$attrs.hack_ins_containerl ? {container: this.render_control} : {}),
                ...(this.$attrs.hack_ins_nolab ? {label: () => []} : {}),
                ...ov,
                ...this.$slots,
            },
            child_items: [],
        };
    },
    computed: {
        computed_items: function () {
            const _this = this;
            return (this.items ?? []).map(function (item) {
                const out = {
                    ...item,
                    get modelValue() {
                        if (item.path === undefined) {
                            return null;
                        }
                        let out = _this.form_value;
                        item.path.split('.').forEach(key => out = out?.[key]);
                        return out;
                    },
                    'onUpdate:modelValue': function (value) {
                        if (item.path === undefined) {
                            return;
                        }
                        let key;
                        let tmp = _this.form_value;
                        item.path.split('.').forEach(function (_key) {
                            if (key) {
                                tmp = tmp[key];
                            }
                            key = _key;
                        });
                        tmp[key] = value;
                    },
                };
                delete out.path;
                return out;
            });
        },
    },
    methods: {
        render_label: function () {
            if (this.$slots.label) {
                return this.$slots.label();
            }
            return Vue.h('label', {for: this.id}, this.label);
        },
        render_control: function () {
            const layout = this.layout ?? (this.type ? null : 'layout-basic');
            if (layout) {
                return Vue.h(Vue.resolveComponent(layout), {
                    ...this.$attrs,
                    inst: this,
                    items: this.child_items,
                });
            }
            if (!this.form_types[this.type]) {
                return ['⚠️ no type ⚠️'];
            }
            return Vue.h(Vue.resolveComponent(this.form_types[this.type]?.name ?? this.form_types[this.type]), {
                id: this.id,
                modelValue: this.modelValue,
                'onUpdate:modelValue': v => this.$emit('update:modelValue', v),
            });
        },
    },
    created: function () {
        this.form_items_parent.add(this);
    },
    unmounted: function () {
        this.form_items_parent.remove(this);
    },
});
