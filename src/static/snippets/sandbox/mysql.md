# Sandbox • MySQL

```vue
<data-vars v-slot="vars" :vars="{table: null, row: null, selection1: [], selection2: []}">
<reset-on-change :vars chain="table,row" />
    <breadcrumbs>
        <breadcrumbs-item value="root" label="Tables">
            <data-fetch v-slot="fetch" url="http://127.0.0.1:3000/api/v1/tables" auto>
                <div class="sticky-t flex-row flex-align-center gap10 mb15 white">
                    <button-refresh v-on:click="fetch.refresh" :disabled="fetch.loading" />
                    <button-json :value="fetch.response" />
                    <button-selection :value="vars.selection1" />
                    <spinner v-if="fetch.loading" />
                </div>
                <table-sel v-model="vars.table" :selection="vars.selection1" :items="fetch?.response?.items" />
            </data-fetch>
        </breadcrumbs-item>
        <breadcrumbs-item :value="vars.table" v-bind:label="`Rows [${vars.table?.TABLE_NAME}]`">
            <data-fetch v-slot="fetch" v-bind:url="`http://127.0.0.1:3000/api/v1/tables/${vars.table.TABLE_NAME}/rows`" auto>
                <div class="sticky-t flex-row flex-align-center gap10 mb15 white">
                    <button-refresh v-on:click="fetch.refresh" :disabled="fetch.loading" />
                    <button-json :value="fetch.response" />
                    <button-selection :value="vars.selection2" />
                    <spinner v-if="fetch.loading" />
                </div>
                <table-sel v-model="vars.row" :selection="vars.selection2" :items="fetch?.response?.items" />
            </data-fetch>
        </breadcrumbs-item>
        <breadcrumbs-item :value="vars.row" label="Row">
            <pre>{{ vars.row }}</pre>
            <p>dynamic-form v-model="vars.row"</p>
            <p><button>Save</button> <button>Cancel</button></p>
        </breadcrumbs-item>
    </breadcrumbs>
</data-vars>
```
