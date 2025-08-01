vue_component('spinner', {
    emits: [],
    props: [],
    template: `
        <div class="Spinner"><div class="Spinner-line--1"><div class="Spinner-line-cog"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--left"></div></div><div class="Spinner-line-ticker"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--center"></div></div><div class="Spinner-line-cog"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--right"></div></div></div><div class="Spinner-line--2"><div class="Spinner-line-cog"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--left"></div></div><div class="Spinner-line-ticker"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--center"></div></div><div class="Spinner-line-cog"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--right"></div></div></div><div class="Spinner-line--3"><div class="Spinner-line-cog"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--left"></div></div><div class="Spinner-line-ticker"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--center"></div></div><div class="Spinner-line-cog"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--right"></div></div></div><div class="Spinner-line--4"><div class="Spinner-line-cog"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--left"></div></div><div class="Spinner-line-ticker"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--center"></div></div><div class="Spinner-line-cog"><div class="Spinner-line-cog-inner Spinner-line-cog-inner--right"></div></div></div></div>
    `,
    data: function () {
        return {};
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created: function () {
    },
    unmounted: function () {
    },
});

css`
    /* https://codepen.io/alexandr-ivchenko/pen/abzzJdG */

    .Spinner {
        width: 28px;
        height: 28px;
        animation: container-rotate 1600ms linear infinite;
    }

    .Spinner-line--1 {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-color: #21D353;
        animation:
                fill-unfill-rotate 4800ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
                line-1-fade-in-out 4800ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    }

    .Spinner-line--2 {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-color: #4A9BE2;
        animation:
                fill-unfill-rotate 4800ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
                line-2-fade-in-out 4800ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    }

    .Spinner-line--3 {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-color: #FFA511;
        animation:
                fill-unfill-rotate 4800ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
                line-3-fade-in-out 4800ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    }

    .Spinner-line--4 {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-color: #FE4E4E;
        animation:
                fill-unfill-rotate 4800ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,
                line-4-fade-in-out 4800ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    }

    .Spinner-line-cog {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
        border-color: inherit;
    }

    .Spinner-line-cog-inner {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 200%;
        box-sizing: border-box;
        height: 100%;
        border-width: 3px;
        border-style: solid;
        border-color: inherit;
        border-bottom-color: transparent;
        border-radius: 50%;
        animation: none;
    }

    .Spinner-line-cog-inner--left {
        border-right-color: transparent;
        transform: rotate(129deg);
        animation: left-spin 1200ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    }

    .Spinner-line-cog-inner--right {
        left: -100%;
        border-left-color: transparent;
        transform: rotate(-129deg);
        animation: right-spin 1200ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    }

    .Spinner-line-cog-inner--center {
        width: 1000%;
        left: -450%;
    }

    .Spinner-line-ticker {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 45%;
        width: 10%;
        height: 100%;
        overflow: hidden;
        border-color: inherit;
    }

    @-webkit-keyframes container-rotate {
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes container-rotate {
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes fill-unfill-rotate {
        12.5% {
            transform: rotate(135deg);
        }
        25% {
            transform: rotate(270deg);
        }
        37.5% {
            transform: rotate(405deg);
        }
        50% {
            transform: rotate(540deg);
        }
        62.5% {
            transform: rotate(675deg);
        }
        75% {
            transform: rotate(810deg);
        }
        87.5% {
            transform: rotate(945deg);
        }
        to {
            transform: rotate(1080deg);
        }
    }
    @keyframes fill-unfill-rotate {
        12.5% {
            transform: rotate(135deg);
        }
        25% {
            transform: rotate(270deg);
        }
        37.5% {
            transform: rotate(405deg);
        }
        50% {
            transform: rotate(540deg);
        }
        62.5% {
            transform: rotate(675deg);
        }
        75% {
            transform: rotate(810deg);
        }
        87.5% {
            transform: rotate(945deg);
        }
        to {
            transform: rotate(1080deg);
        }
    }
    @-webkit-keyframes left-spin {
        0% {
            transform: rotate(130deg);
        }
        50% {
            transform: rotate(-5deg);
        }
        to {
            transform: rotate(130deg);
        }
    }
    @keyframes left-spin {
        0% {
            transform: rotate(130deg);
        }
        50% {
            transform: rotate(-5deg);
        }
        to {
            transform: rotate(130deg);
        }
    }
    @-webkit-keyframes right-spin {
        0% {
            transform: rotate(-130deg);
        }
        50% {
            transform: rotate(5deg);
        }
        to {
            transform: rotate(-130deg);
        }
    }
    @keyframes right-spin {
        0% {
            transform: rotate(-130deg);
        }
        50% {
            transform: rotate(5deg);
        }
        to {
            transform: rotate(-130deg);
        }
    }
    @-webkit-keyframes line-1-fade-in-out {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        26% {
            opacity: 0;
        }
        89% {
            opacity: 0;
        }
        90% {
            opacity: 1;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes line-1-fade-in-out {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        26% {
            opacity: 0;
        }
        89% {
            opacity: 0;
        }
        90% {
            opacity: 1;
        }
        to {
            opacity: 1;
        }
    }
    @-webkit-keyframes line-2-fade-in-out {
        0% {
            opacity: 0;
        }
        15% {
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        51% {
            opacity: 0;
        }
    }
    @keyframes line-2-fade-in-out {
        0% {
            opacity: 0;
        }
        15% {
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        51% {
            opacity: 0;
        }
    }
    @-webkit-keyframes line-3-fade-in-out {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        76% {
            opacity: 0;
        }
    }
    @keyframes line-3-fade-in-out {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        76% {
            opacity: 0;
        }
    }
    @-webkit-keyframes line-4-fade-in-out {
        0% {
            opacity: 0;
        }
        65% {
            opacity: 0;
        }
        75% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @keyframes line-4-fade-in-out {
        0% {
            opacity: 0;
        }
        65% {
            opacity: 0;
        }
        75% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
