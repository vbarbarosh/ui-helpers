vue_component('modal-form', {
    props: ['value'],
    inject: ['modal'],
    template: `
        <div v-on:click="click_backdrop" class="fix-f flex-row p50 oa" style="background:rgba(0,0,0,0.25)">
            <div class="rel ma max-ww max-hh bbox p15 white bs50 br5 oa">
                <div class="min-w600">
                    <div class="sticky-t">
                        <copy-to-clipboard v-bind:value="json" class="m10n" />
                    </div>
<form-types>
<form-type v-slot="slot" type="microsoft_dummy">
    <form-classic v-model="slot.value" :items="vars.items ??= [
        {type: 'string', path: 'id', label: 'ID'},
        {type: 'string', path: 'name', label: 'Name'},
        {type: 'string', path: 'language', label: 'Language'},
        {type: 'textarea', path: 'bio', label: 'BIO'},
        {type: 'string', path: 'version', label: 'Version'},
    ]" />
</form-type>
                    <form-classic>
                        <form-item v-model="value.form" v-bind:type="value.type" />
                    </form-classic>
</form-types>
                    <div class="mt15"></div>
                    <div class="flex-row flex-justify-between">
                        <button v-on:click="click_remove">Remove</button>
                        <button v-on:click="click_save">Save</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            vars: {},
        };
    },
    computed: {
        json: function () {
            try {
                return JSON.stringify(this.value, null, 2);
            }
            catch (error) {
                return `Error: ${error.message}`;
            }
        },
    },
    watch: {
    },
    methods: {
        click_backdrop: function (event) {
            if (event.target === event.currentTarget) {
                this.modal.return(false);
            }
        },
        click_remove: async function () {
            await blocking(Promise.method(this.value.remove ?? ignore).call(null, this.value.form));
            this.modal.return(true);
        },
        click_save: async function () {
            await blocking(Promise.method(this.value.save ?? ignore).call(null, this.value.form));
            this.modal.return(true);
        },
    },
    unmounted: function () {
    },
});

function modal_form(value)
{
    return vue_modal({template: '<modal-form v-bind:value="value" />', value});
}
