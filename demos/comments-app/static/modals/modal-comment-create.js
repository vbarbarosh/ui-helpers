vue_component('modal-comment-create', {
    props: ['value'],
    inject: ['modal'],
    template: `
        <div v-on:click="click_backdrop" class="fix-f flex-row oa" style="background:rgba(0,0,0,0.25)">
            <div class="ma">
                <div class="w500 m15 white bs50 br5">
                    <h2 class="p20 flex-row-center-left">
                        Create Comment
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
            comment: {
                uid: null,
                parent_uid: null,
                body: 'In gravida sem a risus viverra tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Aliquam eleifend ante in pretium viverra. Ut quam orci, blandit sed nisl vel, fringilla ornare lectus. Integer vel aliquam metus. Morbi rhoncus tortor sit amet erat efficitur, nec tincidunt tellus ultrices. Etiam ac porta sapien. Donec posuere faucibus ligula nec condimentum. Morbi efficitur pulvinar enim, non lobortis est cursus non. Vestibulum feugiat pulvinar est, a placerat tortor tincidunt sed. Nullam lectus dui, suscipit nec urna sed, maximus tincidunt nisi. Nullam in porta quam.'
            },
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
        click_backdrop: function (event) {
            // TODO Mousedown on modal, while preseed - move mouse to backdrop, release button → click handler will be called which will close modal
            if (event.target === event.currentTarget) {
                this.modal.return(false);
            }
        },
        submit: m_modal_hide(async function () {
            await blocking(comments_create(this.comment));
            this.modal.return(true);
        }),
        cancel: function () {
            this.modal.return(false);
        },
    },
    created: function () {
    },
    unmounted: function () {
    },
});

function modal_comment_create(value)
{
    return vue_modal({template: '<modal-comment-create v-bind:value="value" />', value});
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
