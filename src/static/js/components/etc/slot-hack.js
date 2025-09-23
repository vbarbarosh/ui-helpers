vue_component('slot-hack', {
    emits: [],
    inject: ['slot_hack'],
    render: function () {
        console.log('slot_hack', this.slot_hack.$slots);
        if (!this.slot_hack?.$slots?.default) {
            return [];
        }
        return this.slot_hack.$slots.default();
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created: function () {
    },
    unmounted: function () {
    },
});
