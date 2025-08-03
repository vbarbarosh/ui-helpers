// https://observablehq.com/plot/getting-started#plot-in-vue
vue_component('plot', {
    props: ['params'],
    template: `<div v-once />`,
    // render: function () {
    //     const {params} = this;
    //     return Vue.withDirectives(Vue.h('div'), [
    //         [
    //             {
    //                 mounted(el) {
    //                     el.append(Plot.plot(params));
    //                 }
    //             }
    //         ]
    //     ]);
    // },
    watch: {
        params: 'refresh',
    },
    methods: {
        refresh: function () {
            if (this.$el) {
                this.$el.innerHTML = '';
                if (this.params) {
                    this.$el.append(Plot.plot(this.params));
                }
            }
        },
    },
    mounted: function () {
        if (this.params) {
            this.$el.append(Plot.plot(this.params));
        }
    },
});

html`
    <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
    <script src="https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6"></script>
`;
