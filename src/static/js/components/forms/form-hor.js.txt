vue_component('form-hor', {
    emits: [],
    props: [],
    template: `<form class="form-hor"><slot /></form>`,
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
    .form-hor {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form-hor > .form-item {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .form-hor > .form-item > label {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100px;
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: auto;
        cursor: pointer;
    }
    .form-hor > .form-item > :where(:not(label)) {
        flex: auto 0 1;
    }
`;
