vue_component('form-render-label', {
    props: ['item'],
    render: function () {
        if (this.item.inst) {
            return this.item.inst.render_label();
        }
        return Vue.h('label', {for: this.item.id}, item.label);
    },
});
