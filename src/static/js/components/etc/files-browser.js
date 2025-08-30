vue_component('files-browser', {
    props: ['files'],
    template: `
        <div class="hsplit gap15">
            <div class="w200">
                <ul class="xm xp sticky-t">
                    <li v-for="file in files"
                        v-on:click="click_file_name(file)"
                        v-bind:key="file.name"
                        v-bind:class="{active: (file.name === active?.name)}"
                        class="xls files-browser-row">
                        📄 {{ file.name }}
                    </li>
                </ul>
            </div>
            <div v-if="active" class="fluid">
                <div class="rel sticky-t"><copy-to-clipboard :value="active.body" /></div>
                <markdown v-if="active.name.endsWith('.md')" :value="active.body" />
                <prism-js v-if="active.name.endsWith('.js')" :value="active.body" />
                <prism-js v-else-if="active.name.endsWith('.json')" :value="active.body" />
                <prism-php v-else-if="active.name.endsWith('.php')" :value="active.body" />
                <prism-bash v-else-if="active.name.endsWith('.sh')" :value="active.body" />
                <prism-js v-else-if="active.body?.startsWith('#!/usr/bin/env node')" :value="active.body"></prism-js>
                <div v-else-if="active.url"><img :src="active.url" alt="" class="max-w400 max-h400" /></div>
                <pre v-else>{{ active.body }}</pre>
            </div>
        </div>
    `,
    data: function () {
        return {
            active: null,
        };
    },
    watch: {
        files: {
            immediate: true,
            handler: function () {
                if (this.files.some(v => v === this.active)) {
                    return;
                }
                if (this.active) {
                    this.active = this.files.find(v => v.name === this.active.name);
                }
                this.active ??= this.files[0];
            },
        },
    },
    methods: {
        click_file_name: function (file) {
            this.active = file;
        },
    },
});

css`
    .files-browser-row { padding: 2px 4px; border-radius: 6px; cursor: pointer; }
    .files-browser-row:hover { background: #eef6ff; }
    .files-browser-row.active { background: #dbeafe; outline: 1px solid #bfdbfe; }
`;
