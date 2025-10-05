vue_component('form-types', {
    props: ['modelValue', 'items', 'types'],
    provide: function () {
        return {
            form_types: {
                'form-layout-group': {
                    insertions: function (form_item) {
                        return {
                            container: function () {
                                return Vue.h(Vue.resolveComponent('form-layout-group'), {inst: form_item, items: form_item.child_items}, {
                                    legend: form_item.render_label,
                                });
                            },
                        };
                    },
                },
                'form-layout-inline-rev': 'form-layout-inline-rev',
                cols: {
                    name: 'form-layout-columns',
                },
                checkbox: {
                    name: 'input-checkbox',
                    insertions: function (form_item) {
                        if (form_item.$attrs.noinline !== undefined) {
                            return {};
                        }
                        return {
                            label: function () {
                                return [];
                            },
                            control: function () {
                                return Vue.h('DIV', {class: 'flex-row-center-left gap5'}, [
                                    form_item.render_control(),
                                    form_item.render_label(),
                                ]);
                            },
                        };
                    },
                },
                divider: {
                    insertions: function (form_item) {
                        return {
                            container: function () {
                                return Vue.h('hr');
                            },
                        };
                    },
                },
                header: {
                    insertions: function (form_item) {
                        return {
                            container: function () {
                                return Vue.h('h2', {class: 'xm', ...form_item.$attrs}, form_item.render_label());
                            },
                        };
                    },
                },
                expand: {
                    insertions: function (form_item) {
                        return {
                            container: function () {
                                const props = {
                                    modelValue: form_item.modelValue,
                                    'onUpdate:modelValue': v => form_item.$emit('update:modelValue', v),
                                };
                                return Vue.h(Vue.resolveComponent('expand'), props, {
                                    default: () => Vue.h(Vue.resolveComponent('form-layout-basic'), {items: form_item.child_items, inst: form_item}),
                                });
                            },
                        };
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
                ...this.types
            },
        };
    },
    template: `<slot />`,
});
