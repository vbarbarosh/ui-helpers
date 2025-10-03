vue_component('render-function', {
    inheritAttrs: false,
    props: ['fn', 'item'],
    render: function () {
        return this.fn({item: this.item}, this.$slots);
    },
});
