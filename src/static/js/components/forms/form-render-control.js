vue_component('form-render-control', {
    props: ['item'],
    inject: ['form_types'],
    // template: `
    //     <component v-if="form_types[item.type]"
    //                v-model="item.value"
    //                v-bind:is="form_types[item.type]"
    //                v-bind:id="item.id"
    //                v-bind="computed_props" />
    // `,
    render: function () {
        if (this.item.inst) {
            return this.item.inst.render_control();
        }
        if (this.form_types[this.item.type]) {
            if (typeof this.form_types[this.item.type] === 'string') {
                const props = {
                    id: this.item.id,
                    ...this.computed_props,
                    modelValue: this.item.value,
                    'onUpdate:modelValue': v => this.item.value = v,
                };
                return Vue.h(Vue.resolveComponent(this.form_types[this.item.type]), props, this.$slots);
            }
            if (this.form_types[this.item.type]) {
                const props = {
                    id: this.item.id,
                    other: this.computed_props,
                    modelValue: this.item.value,
                    'onUpdate:modelValue': v => this.item.value = v,
                };
                console.log('render-control', this.item.type, this.$slots);
                return Vue.h(this.form_types[this.item.type], props, this.$slots);
            }
        }
        return null;
    },
    computed: {
        computed_props: function () {
            const reserved = {is: 1, type: 1, path: 1, label: 1};
            return Object.fromEntries(Object.entries(this.item.orig).filter(v => !reserved[v[0]]));
        },
    },
});
