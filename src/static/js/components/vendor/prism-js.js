// https://prismjs.com/
vue_component('prism-js', {
    emits: [],
    props: ['value'],
    template: `
        <pre><code v-html="html" /></pre>
    `,
    data: function () {
        return {
            ready: false,
        };
    },
    computed: {
        html: function () {
            if (!this.ready) {
                return '';
            }
            const text = (typeof this.value === 'string') ? this.value : JSON.stringify(this.value, null, 2);
            return Prism.highlight(text, Prism.languages.javascript, 'javascript');
        },
    },
    watch: {},
    methods: {},
    created: async function () {
        await new Promise(function (resolve, reject) {
            Prism.plugins.autoloader.loadLanguages(['javascript'], resolve, reject);
        });
        this.ready = true;
    },
    unmounted: function () {
    },
});

html`
    <link href="https://unpkg.com/prismjs@v1.x/themes/prism.css" rel="stylesheet" />
    <script src="https://unpkg.com/prismjs@v1.x/components/prism-core.js" data-manual></script>
    <script src="https://unpkg.com/prismjs@v1.x/plugins/autoloader/prism-autoloader.js"></script>
`;
