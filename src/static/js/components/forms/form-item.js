vue_component('form-item', {
    emits: [],
    props: ['label'],
    template: `
        <div class="form-item">
            <form-label v-if="label" v-bind:for="id">{{ label }}</form-label>
            <slot />
        </div>
    `,
    provide: function () {
        return {
            form_item_id: this.id,
        };
    },
    data: function () {
        return {
            id: random_html_id(),
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
});
