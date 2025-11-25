vue_component('form-item', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'path', 'type', 'label', 'items', 'help', 'placeholder'],
    inheritAttrs: false,
    inject: {
        form_value: 'form_value',
        form_items_parent: {from: 'form_items', default: {add: () => 0, remove: () => 0}},
    },
    provide: function () {
        return {
            form_items: {
                add: inst => this.child_items.push(inst),
                remove: inst => this.child_items.splice(this.child_items.indexOf(inst) >>> 0, 1),
            },
        };
    },
    template: '<slot />',
    data: function () {
        return {
            id: `id-${crypto.randomUUID()}`,
            key: `key-${crypto.randomUUID()}`,
            child_items: [],
        };
    },
    created: function () {
        this.form_items_parent.add(this);
    },
    unmounted: function () {
        this.form_items_parent.remove(this);
    },
});
