vue_component('data-local-storage', {
    emits: ['update:modelValue'],
    props: ['modelValue', 'store'],
    render: function () {
        return this.$slots.default(this.slot_scope);
    },
    data: function () {
        return {
            uid: null,
            response: null,
            slot_scope: {
                loading: Vue.computed(() => !!this.uid),
                response: Vue.computed(() => this.response),
                refresh: this.refresh,
            },
        };
    },
    watch: {
        modelValue: {
            deep: true,
            handler: function () {
                const json = JSON.stringify(this.modelValue);
                localStorage.setItem(this.store ?? 'hello', json);
            },
        },
    },
    methods: {
        refresh: async function () {
        },
    },
    created: function () {
        try {
            const value = JSON.parse(localStorage.getItem(this.store ?? 'hello'));
            if (typeof this.modelValue === typeof value) {
                this.$emit('update:modelValue', value);
            }
        }
        catch {
        }
    },
    unmounted: function () {
    },
});
