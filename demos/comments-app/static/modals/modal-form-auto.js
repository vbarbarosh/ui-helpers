vue_component('modal-form-auto', {
    props: ['value'],
    inject: ['modal'],
    template: `
        <div v-on:click="click_backdrop" class="fix-f flex-row oa" style="background:rgba(0,0,0,0.25)">
            <div class="ma">
                <div class="w500 m15 white bs50 br5">
                    <h2 class="p20 flex-row-center-left">
                        Form Auto
                        <button v-on:click="modal.return(false)" class="xbutton mla cur-pointer">x</button>
                    </h2>
                    <div class="p20">
                        <form-auto v-on:cancel="cancel" v-on:submit="submit" v-bind:modelValue="value" />
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {};
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
        submit: function () {
            this.modal.return(true);
        },
        cancel: function () {
            this.modal.return(false);
        },
    },
    created: function () {
    },
    unmounted: function () {
    },
});

function modal_form_auto(value)
{
    return vue_modal({template: '<modal-form-auto v-bind:value="value" />', value});
}
