const vue_ready_callbacks = [];
const vue_components = [];
const vue_directives = [];

function vue_ready(callback)
{
    vue_ready_callbacks.push(callback);
}

function vue_component(name, params)
{
    vue_components.push({name, params});
}

function vue_directive(name, params)
{
    vue_directives.push({name, params});
}

(function () {

    window.bundle_pending = ['utils'];
    window.bundle_pending_ready = ready;

    const current_script_src = document.currentScript.src.split('/').slice(0, -1).join('/');
    let insert_after = document.currentScript;

    inject('https://unpkg.com/axios@1.11.0/dist/axios.min.js');
    inject('https://unpkg.com/jquery@3.7.1/dist/jquery.js');
    inject('https://unpkg.com/bluebird@3.7.2/js/browser/bluebird.js');
    inject('https://unpkg.com/vue@3.5.18/dist/vue.global.js', function () {
        vue_ready_callbacks.forEach(function (callback) {
            try { callback(); } catch (error) { console.warn(error); }
        });
    });
    inject('https://unpkg.com/@vbarbarosh/dd@1.9.0/dist/dd.js');
    inject('utils.js', function () {
        const i = bundle_pending.indexOf('utils');
        if (i !== -1) {
            bundle_pending.splice(i, 1);
        }
        inject_link('../css/default.css');
        inject('components/breadcrumbs/breadcrumbs-item.js');
        inject('components/breadcrumbs/breadcrumbs.js');
        inject('components/buttons/button-blue.js');
        inject('components/buttons/button-form.js');
        inject('components/buttons/button-green.js');
        inject('components/buttons/button-json.js');
        inject('components/buttons/button-red.js');
        inject('components/buttons/button-refresh.js');
        inject('components/buttons/button-selection.js');
        inject('components/buttons/button-transparent.js');
        inject('components/buttons/button-void.js');
        inject('components/data/data-fetch.js');
        inject('components/data/data-filter.js');
        inject('components/data/data-lipsum-countries.js');
        inject('components/data/data-lipsum-dogs.js');
        inject('components/data/data-lipsum-penguins.js');
        inject('components/data/data-lipsum-slider.js');
        inject('components/data/data-local-storage-selection.js');
        inject('components/data/data-local-storage.js');
        inject('components/data/data-selection.js');
        inject('components/data/data-snapshots.js');
        inject('components/data/data-vars.js');
        inject('components/etc/copy-to-clipboard.js');
        inject('components/etc/download-zip.js');
        inject('components/etc/expand.js');
        inject('components/etc/files-browser.js');
        inject('components/etc/highlight.js');
        inject('components/etc/lipsum.js');
        inject('components/etc/render-function.js');
        inject('components/etc/reset-on-change.js');
        inject('components/etc/slot-hack.js');
        inject('components/etc/spinner.js');
        inject('components/etc/warn-invalid-layout-item-type.js');
        inject('components/forms/form-box.js');
        inject('components/forms/form-invalid-layout-item-type.js');
        inject('components/forms/form-item.js');
        inject('components/forms/form-layout-accordion.js');
        inject('components/forms/form-layout-basic.js');
        inject('components/forms/form-layout-columns.js');
        inject('components/forms/form-layout-group.js');
        inject('components/forms/form-layout-inline-rev.js');
        inject('components/forms/form-layout-table.js');
        inject('components/forms/form-layout-tabs.js');
        inject('components/forms/form-layout-wrapper.js');
        inject('components/forms/form-type-component.js');
        inject('components/forms/form-type.js');
        inject('components/forms/form-types.js');
        inject('components/inputs/input-checkbox.js');
        inject('components/inputs/input-checkboxes.js');
        inject('components/inputs/input-color.js');
        inject('components/inputs/input-date.js');
        inject('components/inputs/input-email.js');
        inject('components/inputs/input-file-drop-zone.js');
        inject('components/inputs/input-file.js');
        inject('components/inputs/input-files-drop-zone.js');
        inject('components/inputs/input-files.js');
        inject('components/inputs/input-int.js');
        inject('components/inputs/input-month.js');
        inject('components/inputs/input-password.js');
        inject('components/inputs/input-radio.js');
        inject('components/inputs/input-radios.js');
        inject('components/inputs/input-range.js');
        inject('components/inputs/input-search.js');
        inject('components/inputs/input-select-many.js');
        inject('components/inputs/input-select.js');
        inject('components/inputs/input-string.js');
        inject('components/inputs/input-tel.js');
        inject('components/inputs/input-text.js');
        inject('components/inputs/input-textarea.js');
        inject('components/inputs/input-time.js');
        inject('components/inputs/input-url.js');
        inject('components/inputs/input-week.js');
        inject('components/live/live-icons-inner.js');
        inject('components/live/live-icons.js');
        inject('components/live/live-vue-inner.js');
        inject('components/live/live-vue.js');
        inject('components/modals/modal-blocking.js');
        inject('components/modals/modal-error.js');
        inject('components/modals/modal-form.js');
        inject('components/modals/modal-hello.js');
        inject('components/modals/modal-json.js');
        inject('components/svg/svg-icon-ai.js');
        inject('components/svg/svg-icon-check.js');
        inject('components/svg/svg-icon-copy.js');
        inject('components/svg/svg-icon-cross.js');
        inject('components/svg/svg-icon-file-earmark-binary.js');
        inject('components/svg/svg-icon-file-earmark-font.js');
        inject('components/svg/svg-icon-file-earmark-image.js');
        inject('components/svg/svg-icon-file-earmark-music.js');
        inject('components/svg/svg-icon-file-earmark-play.js');
        inject('components/svg/svg-icon-file-earmark-text.js');
        inject('components/svg/svg-icon-file-earmark-zip.js');
        inject('components/svg/svg-icon-file-earmark.js');
        inject('components/svg/svg-icon-filetype-csv.js');
        inject('components/svg/svg-icon-filetype-json.js');
        inject('components/svg/svg-icon-filetype-md.js');
        inject('components/svg/svg-icon-folder-fill.js');
        inject('components/svg/svg-icon-folder.js');
        inject('components/svg/svg-icon-form.js');
        inject('components/svg/svg-icon-icons8-107448-delete.js');
        inject('components/svg/svg-icon-icons8-12053-document.js');
        inject('components/svg/svg-icon-icons8-12141-file.js');
        inject('components/svg/svg-icon-icons8-12229-home.js');
        inject('components/svg/svg-icon-icons8-12775-opened-folder.js');
        inject('components/svg/svg-icon-icons8-12778-picture.js');
        inject('components/svg/svg-icon-icons8-12783-music.js');
        inject('components/svg/svg-icon-icons8-folder.js');
        inject('components/svg/svg-icon-icons8-image-file.js');
        inject('components/svg/svg-icon-json.js');
        inject('components/svg/svg-icon-search.js');
        inject('components/svg/svg-icon-svgrepo-259551-hard-disk.js');
        inject('components/svg/svg-icon-warn.js');
        // inject('components/tables/s-table.js');
        inject('components/tables/table-sel.js');
        inject('components/tabs/tabs-item.js');
        inject('components/tabs/tabs-underline.js');
        inject('components/tabs/tabs.js');
        inject('components/vendor/element-plus/index.js');
        inject('components/vendor/fancybox.js');
        inject('components/vendor/markdown-with-tabs.js');
        inject('components/vendor/markdown.js');
        inject('components/vendor/observable/plot.js');
        inject('components/vendor/prism-bash.js');
        inject('components/vendor/prism-code-editor.js');
        inject('components/vendor/prism-html.js');
        inject('components/vendor/prism-js.js');
        inject('components/vendor/prism-php.js');
        inject('components/vendor/wavesurfer-player.js');
        inject('components/virtual/virtual-grid.js');
        inject('directives/autofocus.js');
        inject('directives/autosize.js');
    });

    function ready(elem) {
        const i = bundle_pending.indexOf(elem);
        if (i === -1) {
            return;
        }
        bundle_pending.splice(i, 1);
        if (bundle_pending.length !== 0) {
            return;
        }
        console.log('🎉 All scripts loaded');
        window.app = Vue.createApp({template: '<form-types><app /></form-types>'});
        // Warning: a promise was created in a handler at [...] but was not returned from it, see http://goo.gl/rRqMUw
        // http://bluebirdjs.com/docs/warning-explanations.html#warning-a-promise-was-created-in-a-handler-but-was-not-returned-from-it
        Promise.config({
            warnings: false,
        });
        app.use(ElementPlus);
        let debug_counter = 0;
        app.mixin({
            computed: {
                win: function () { return window; },
                doc: function () { return document; },
                d3: function () { return window.d3; },
                Plot: function () { return window.Plot; },
            },
            methods: {
                tick: function () {
                    return debug_counter++;
                },
                px,
                pc,
                format_bytes,
                format_date,
                format_thousands,
                thumbnailer,
                plural,
            },
        });
        // Prevent Vue from spamming the console with "helpful" tips
        app.config.productionTip = false;
        app.config.errorHandler = async function (error) {
            console.log('errorHandler', error);
            await error_handler(error);
        };
        // app.config.warnHandler = async function (error) {
        //     console.log('warnHandler', error);
        // };
        vue_components.forEach(function (item) {
            app.component(item.name, item.params);
        });
        vue_directives.forEach(function (item) {
            app.directive(item.name, item.params);
        });
        app.mount(document.body.appendChild(document.createElement('DIV')));
    }

    function inject(src, onload) {
        const elem = document.createElement('SCRIPT');
        elem.src = src.match(/^https?:/) ? src : `${current_script_src}/${src}`;
        elem.onload = function () {
            ready(elem);
            if (typeof onload === 'function') {
                onload(elem);
            }
        };
        bundle_pending.push(elem);
        insert_after.insertAdjacentElement('afterend', elem);
        insert_after = elem;
    }

    // <link href="https://unpkg.com/@vbarbarosh/smcss@1.2.0/dist/sm.css" rel="stylesheet">
    function inject_link(href, onload) {
        const elem = document.createElement('LINK');
        elem.rel = 'stylesheet';
        elem.href = href.match(/^https?:/) ? href : `${current_script_src}/${href}`;
        elem.onload = function () {
            ready(elem);
            if (typeof onload === 'function') {
                onload(elem);
            }
        };
        bundle_pending.push(elem);
        document.head.insertAdjacentElement('beforeend', elem);
    }

    async function error_handler(error)
    {
        try {
            await modal_error({error}).promise();
        }
        catch (error) {
            console.log(error);
        }
    }

})();
