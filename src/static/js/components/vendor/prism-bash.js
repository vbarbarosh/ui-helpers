// https://prismjs.com/
vue_component('prism-bash', {
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
            return Prism.highlight(this.value, Prism.languages.bash, 'bash');
        },
    },
    watch: {
    },
    methods: {
    },
    created: async function () {
        await new Promise(function (resolve, reject) {
            Prism.plugins.autoloader.loadLanguages(['bash'], resolve, reject);
        });
        this.ready = true;
    },
    unmounted: function () {
    },
});
