# Breadcrumbs • Mongo

```vue
<data-vars v-slot="vars" :vars="{conn: null, db: null, col: null, doc: null}">
    <reset-on-change :vars="vars" chain="conn,db,col,doc" />
    <breadcrumbs :vars>
        <breadcrumbs-item value="root" label="Connections">
            <form-select v-model="vars.conn" :options="[
                {value: 'local', label: 'local'},
                {value: 'remote1', label: 'remote1'},
                {value: 'remote2', label: 'remote2'},
                {label: 'null', value: null},
            ]" label="Select MongoDB connection" />
            <pre>{{vars}}</pre>
        </breadcrumbs-item>
        <breadcrumbs-item :value="vars.conn" label="Databases">
            <form-select v-model="vars.db" :options="[
                {value: 'db1', label: 'db1'},
                {value: 'db2', label: 'db2'},
                {value: 'db3', label: 'db3'}]" label="Select MongoDB database" />
            <pre>{{vars}}</pre>
        </breadcrumbs-item>
        <breadcrumbs-item :value="vars.db" label="Collections">
            <form-select v-model="vars.col" :options="[
                {value: 'col1', label: 'col1'},
                {value: 'col2', label: 'col2'},
                {value: 'col3', label: 'col3'}]" label="Select MongoDB collection" />
            <pre>{{vars}}</pre>
        </breadcrumbs-item>
        <breadcrumbs-item :value="vars.col" label="Documents">
            <p>Select MongoDB document</p>
            <form-select v-model="vars.doc" :options="[
                {value: 'doc1', label: 'doc1'},
                {value: 'doc2', label: 'doc2'},
                {value: 'doc3', label: 'doc3'}]" label="Select MongoDB document" />
            <pre>{{vars}}</pre>
        </breadcrumbs-item>
        <breadcrumbs-item :value="vars.doc" label="Document Details">
            <p>Document details</p>
            <pre>{{ vars }}</pre>
        </breadcrumbs-item>
    </breadcrumbs>
</data-vars>
```
