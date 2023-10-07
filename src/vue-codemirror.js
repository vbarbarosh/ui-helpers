(function () {

document.write(`
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/codemirror.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/idea.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/3024-day.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/3024-night.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/abcdef.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/ambiance-mobile.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/ambiance.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/ayu-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/ayu-mirage.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/base16-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/base16-light.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/bespin.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/blackboard.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/cobalt.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/colorforth.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/darcula.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/dracula.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/duotone-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/duotone-light.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/eclipse.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/elegant.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/erlang-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/gruvbox-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/hopscotch.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/icecoder.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/idea.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/isotope.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/lesser-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/liquibyte.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/lucario.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/material-darker.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/material-ocean.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/material-palenight.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/material.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/mbo.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/mdn-like.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/midnight.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/monokai.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/moxer.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/neat.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/neo.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/night.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/nord.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/oceanic-next.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/panda-syntax.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/paraiso-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/paraiso-light.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/pastel-on-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/railscasts.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/rubyblue.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/seti.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/shadowfox.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/solarized.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/ssms.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/the-matrix.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/tomorrow-night-bright.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/tomorrow-night-eighties.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/ttcn.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/twilight.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/vibrant-ink.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/xq-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/xq-light.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/yeti.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/yonce.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/theme/zenburn.min.css" rel="stylesheet">
<style type="text/css">
    .CodeMirror {
        display: flex;
        /* border: 1px solid #eee; */
        height: auto;
        min-height: 100%;
    }
    .CodeMirror-scroll {
        height: auto;
        min-height: 100%;
    }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/addon/display/placeholder.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/mode/php/php.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/mode/xml/xml.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/mode/javascript/javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/mode/css/css.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/mode/htmlmixed/htmlmixed.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.0/mode/clike/clike.min.js"></script> 
`);

const trigger_from_elem_visible = (function () {

    const listeners = [];
    const listeners_jquery = {
        mouseup: () => setTimeout(check, 0),
    };
    let timer = null;

    /**
     * Fire an event when an element become visible (once for
     * each transition hidden -> visible).
     */
    function trigger_from_elem_visible(elem, callback)
    {
        attach(elem, callback);
        return {off: () => detach(elem, callback)};
    }

    function attach(elem, callback)
    {
        let i = listeners.findIndex(v => v.elem === elem);
        if (i == -1) {
            i = listeners.push({elem, visibility: null, callbacks: []}) - 1;
        }
        listeners[i].callbacks.push(callback);
        if (listeners.length == 1) {
            jQuery(document).on(listeners_jquery);
            timer = setInterval(check, 250);
        }
    }

    function detach(elem, callback)
    {
        const i = listeners.findIndex(v => v.elem === elem);
        if (i != -1) {
            const row = listeners[i];
            const j = row.callbacks.indexOf(callback);
            if (j != -1) {
                if (row.callbacks.length > 1) {
                    row.callbacks.splice(j, 1);
                }
                else {
                    listeners.splice(i, 1);
                    if (listeners.length == 0) {
                        jQuery(document).off(listeners_jquery);
                        clearInterval(timer);
                        timer = null;
                    }
                }
            }
        }
    }

    function check()
    {
        for (let i = 0, end = listeners.length; i < end; ++i) {
            const row = listeners[i];
            const visible = elem_is_visible(row.elem);
            if (row.visibility != visible) {
                row.visibility = visible;
                if (visible) {
                    row.callbacks.forEach(notify);
                }
            }
        }
    }

    function notify(cb)
    {
        try {
            cb();
        }
        catch (error) {
            if (typeof __DEV__ !== 'undefined') {
                console.error('[trigger_from_element_visible] notify failed', error);
            }
        }
    }

    /**
     * Notes
     * Will not work for `fixed` elements.
     *
     * Credits
     * https://stackoverflow.com/a/21696585/1478566
     *
     * @param elem
     * @returns {boolean}
     */
    function elem_is_visible(elem)
    {
        return elem.offsetParent !== null;
    }

    return trigger_from_elem_visible;

})();

Vue.component('vue-codemirror', {
    template: '<div v-once></div>',
    props: ['value', 'mode', 'placeholder', 'autofocus', 'theme'],
    data: function () {
        return {
            orig: this.value
        };
    },
    watch: {
        value: function () {
            if (this.editor && this.value !== this.orig) {
                this.info('setValue', this.value);
                this.editor.setValue(this.value);
            }
        }
    },
    methods: {
        api_replaceSelection: function (text) {
            this.editor.replaceSelection(text);
        },
        info: function (...args) {
            // if (__DEV__) {
            //     console.log(`[${this.$options._componentTag}-${this.uid()}]`, ...args);
            // }
        },
        become_visible: function () {
            this.info('become_visible');
            this.editor ? this.editor.refresh() : this.ready();
        },
        ready: function () {
            this.info('ready');
            const mode = (this.mode == 'html') ? {mode: 'xml', htmlMode: true} : {mode: this.mode};
            const autofocus = typeof this.autofocus == 'string' ? true : !!this.autofocus;
            this.editor = CodeMirror(this.$el, {
                value: this.value || '',
                placeholder: this.placeholder || '',
                lineNumbers: true,
                autofocus,
                theme: this.theme || 'default',
                ...mode,
            });
            this.editor.on('change', this.change);
            this.$once('hook:beforeDestroy', this.clean);
            if (autofocus) {
                jQuery(this.$el).closest('.modal').one('shown.bs.modal', () => this.editor.focus());
            }
        },
        clean: function () {
            this.info('clean');
            this.editor.off('change', this.change);
            this.editor = null;
        },
        change: function () {
            this.info('change');
            this.orig = this.editor.getValue();
            this.$emit('input', this.orig);
        },
    },
    mounted: function () {
        this.info('mounted');
        this.$once('hook:beforeDestroy', trigger_from_elem_visible(this.$el, this.become_visible).off);
    },
});

})();
