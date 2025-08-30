vue_component('download-zip', {
    props: ['files', 'saveAs'],
    template: `
        <button v-on:click="click">🗜️ Download .zip</button>  
    `,
    methods: {
        click: async function () {
            const _this = this;
            const zip = new JSZip();
            await blocking(async function (status) {
                for (const file of _this.files) {
                    if (file.url) {
                        status(`Downloading ${file.name} from ${file.url}...`);
                        const blob = await http_get_blob(file.url);
                        zip.file(file.name, blob);
                        status();
                    }
                    else {
                        zip.file(file.name, file.body);
                    }
                }
                status('Generating .zip file...');
                const blob = await zip.generateAsync({type: 'blob'});
                status('Saving .zip file...');
                saveAs(blob, _this.saveAs ?? 'demo.zip');
            });
        },
    },
});

html`
    <script src="https://unpkg.com/jszip@3.10.1/dist/jszip.js"></script>
    <script src="https://unpkg.com/file-saver@2.0.5/dist/FileSaver.js"></script>
`;
