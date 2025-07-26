vue_component('data-snapshots', {
    props: ['templ'],
    render: function () {
        const _this = this;
        return this.$slots.default({
            get active() { return _this.active; },
            get activate() { return _this.activate; },
            get items() { return _this.items; },
            get capture() { return _this.capture; },
        });
    },
    data: function () {
        const active = JSON.parse(JSON.stringify(this.templ));
        return {
            active,
            items: [{label: 'Initial', data: active}],
            loading_counter: 0,
        };
    },
    computed: {
    },
    methods: {
        refresh: async function () {
        },
        activate: function (item) {
            const i = this.items.indexOf(item);
            if (i === -1) {
                return;
            }
            if (i !== this.items.length - 1) {
                const _this = this;
                this.active = JSON.parse(JSON.stringify(item.data));
                const off = Vue.watch(this.active, function (value, prev) {
                    off();
                    if (_this.active === value) { // Still active?
                        _this.capture();
                    }
                }, {deep: true});
            }
            else {
                this.active = item.data;
            }
        },
        capture: function () {
            this.items.push({label: '#' + this.items.length, data: JSON.parse(JSON.stringify(this.active))});
            this.active = this.items[this.items.length - 1].data;
            return this.active;
        },
    },
    created: async function () {
        await this.refresh();
    },
});
