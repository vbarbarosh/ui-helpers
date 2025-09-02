vue_component('data-local-storage-selection', {
    props: ['selection', 'items', 'prop', 'store'],
    render: function () {
        return this.$slots.default({});
    },
    data: function () {
        return {};
    },
    watch: {
        selection: {
            deep: true,
            handler: function () {
                const json = JSON.stringify(this.selection.map(v => v[this.prop]));
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
            const ids = new Set(JSON.parse(localStorage.getItem(this.store ?? 'hello') ?? '[]'));
            this.selection.splice(0, this.selection.length, ...this.items.filter(v => ids.has(v[this.prop])));
        }
        catch {
        }
    },
    unmounted: function () {
    },
});
