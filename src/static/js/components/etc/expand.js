vue_component('expand', {
    emits: ['update:modelValue'],
    props: ['modelValue'],
    template: `
        <div class="mg10">
            <slot name="label">
                <div>
                    <button v-if="!open" v-on:click="click_expand">expand</button>
                    <button v-else v-on:click="click_collapse">collapse</button>
                </div>
            </slot>
            <div v-show="open">
                <slot>DEFAULT CONTENTS</slot>
            </div>
        </div>
    `,
    data: function () {
        return {
            open: this.modelValue,
        };
    },
    watch: {
        modelValue: function (next) {
            this.open = next;
        },
    },
    methods: {
        click_expand: function () {
            this.open = true;
            this.$emit('update:modelValue', this.open);
        },
        click_collapse: function () {
            this.open = false;
            this.$emit('update:modelValue', this.open);
        },
    },
});
