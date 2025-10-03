vue_component('form-vert', {
    emits: [],
    props: [],
    template: `<form class="form-vert"><slot /></form>`,
    provide: function () {
        return {
            form: this,
        };
    },
    data: function () {
        return {
            items: [],
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
});

css`
    .form-vert {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form-vert > .form-item {
        display: flex;
        flex-direction: column;
    }

    .form-vert > .form-item > label {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100px;
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: auto;
        cursor: pointer;
    }

    .form-vert > .form-item > :where(:not(label)) {
        flex: auto 0 1;
    }
`;
