vue_component('modal-comment-update', {
    props: ['value'],
    inject: ['modal'],
    template: `
        <div v-on:click="click_backdrop" class="fix-f flex-row oa" style="background:rgba(0,0,0,0.25)">
            <div v-if="ready" class="ma">
                <div class="w500 m15 white bs50 br5">
                    <h2 class="p20 flex-row-center-left">
                        Update Comment
                        <button v-on:click="modal.return(false)" class="xbutton mla cur-pointer">x</button>
                    </h2>
                    <div class="p20">
                        <form-auto v-on:cancel="cancel" v-on:submit="submit" v-bind:modelValue="comment" />
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            ready: false,
            comment: null,
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
        refresh: async function () {
            this.comment = await comments_fetch(this.value.comment_uid);
        },
        click_backdrop: function (event) {
            // TODO Mousedown on modal, while preseed - move mouse to backdrop, release button → click handler will be called which will close modal
            if (event.target === event.currentTarget) {
                this.modal.return(false);
            }
        },
        submit: m_modal_hide(async function () {
            await blocking(comments_update(this.comment));
            this.modal.return(true);
        }),
        cancel: function () {
            this.modal.return(false);
        },
    },
    created: m_modal_hide(async function () {
        await blocking(this.refresh());
        this.ready = true;
    }),
    unmounted: function () {
    },
});

function modal_comment_update(value)
{
    return vue_modal({template: '<modal-comment-update v-bind:value="value" />', value});
}

// 💩💩💩 hack ⚠️⚠️⚠️
function m_modal_hide(fn)
{
    return function (...args) {
        this.modal.hide();
        return Promise.method(fn).apply(this, args).finally(this.modal.show_if_pending);
        // return Promise.method(fn).apply(this, args).catch(error_handler).finally(this.modal.show_if_pending);
    };
}
