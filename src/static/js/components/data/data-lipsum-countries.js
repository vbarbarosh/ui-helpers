vue_component('data-lipsum-countries', {
    props: [],
    render: function () {
        const _this = this;
        return this.$slots.default({
            get refresh() { return _this.refresh; },
            get items() { return _this.items; },
            get loading() { return _this.loading_counter > 0; },
        });
    },
    data: function () {
        return {
            items: [],
            loading_counter: 0,
        };
    },
    methods: {
        refresh: async function () {
            this.loading_counter++;
            try {
                this.items = await http_get_json('https://cdn.jsdelivr.net/npm/world_countries_lists@latest/data/countries/en/countries.json');
            }
            finally {
                this.loading_counter--;
            }
        },
    },
    created: async function () {
        await this.refresh();
    },
});
