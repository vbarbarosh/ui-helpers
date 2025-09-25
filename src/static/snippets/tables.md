# Tables

## microsoftedge.github.io/Demos/json-dummy-data/64KB.json

```vue
<data-vars v-slot="vars" :vars="{form: {}, selection: []}">
<!--<data-fetch v-slot="fetch" url="https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json" auto>-->
<data-fetch v-slot="fetch" url="http://127.0.0.1:3000/items" auto>
    <div class="sticky-t flex-row flex-align-center gap10 mb15 white">
        <button-refresh v-on:click="fetch.refresh" :disabled="fetch.loading" />
        <button-json :value="fetch.response" />
        <button-selection :value="vars.selection" />
        <button-form :value="{}" type="microsoft_dummy" v-bind:save="v => win.http_post_json('http://127.0.0.1:3000/items', v).then(fetch.refresh)" />
        <spinner v-if="fetch.loading" />
    </div>
    <form-type v-slot="slot" type="microsoft_dummy">
        <form-classic v-model="slot.value" :items="vars.items ??= [
            {type: 'string', path: 'id', label: 'ID'},
            {type: 'string', path: 'name', label: 'Name'},
            {type: 'string', path: 'language', label: 'Language'},
            {type: 'textarea', path: 'bio', label: 'BIO'},
            {type: 'string', path: 'version', label: 'Version'},
        ]" />
    </form-type>
    <!--
    <form-classic>
        <form-item v-model="vars.form" type="microsoft_dummy" />
    </form-classic>
        <form-classic v-model="vars.form">
            <form-item type="string" path="id" label="id" />
            <form-item type="string" path="name" label="Name" />
            <form-item type="string" path="language" label="Language" />
            <form-item type="textarea" path="bio" label="BIO" />
            <form-item type="string" path="version" label="Version" />
        </form-classic>
    -->
    <pre>{{vars.form}}</pre>
    <table-sel :selection="vars.selection" :items="fetch.response" :columns="[
            {label: 'name', read: v => v.name},
            {label: 'language', read: v => v.language},
            {label: 'id', read: v => v.id},
            {label: 'bio', read: v => v.bio},
            {label: 'version', read: v => v.version},
            {component: 'button-json'},
            {component: {is: 'button-form', type: 'microsoft_dummy', save: v => win.http_patch_json(`http://127.0.0.1:3000/items/${v.id}`, v).then(fetch.refresh), remove: v => win.http_delete(`http://127.0.0.1:3000/items/${v.id}`).then(fetch.refresh)}},
        ]" />
</data-fetch>
</data-vars>
```

## randomuser

```vue
<data-vars v-slot="vars" :vars="{selection: []}">
<data-fetch v-slot="fetch" url="https://randomuser.me/api/?results=10" auto>
    <div class="sticky-t flex-row flex-align-center gap10 mb15 white">
        <button-refresh v-on:click="fetch.refresh" :disabled="fetch.loading" />
        <button-json :value="fetch.response" />
        <button-selection :value="vars.selection" />
        <spinner v-if="fetch.loading" />
    </div>
    <table-sel :selection="vars.selection" :items="fetch.response?.results" :columns="[
            {label: 'picture', slot: 'picture'},
            {label: 'id', read: v => v.id.value},
            {label: 'gender', read: v => v.gender},
            {label: 'nat', read: v => v.nat},
            {label: 'name', read: v => `${v.name.title} ${v.name.first} ${v.name.last}`},
            {label: 'email', read: v => v.email},
            {component: 'button-json'},
        ]">
        <template v-slot:picture="{item}">
            <img :src="thumbnailer(item.picture.large, {w: 50})" alt="" />
        </template>
    </table-sel>
</data-fetch>
</data-vars>
```

## Countries

```vue
<data-lipsum-countries v-slot="lipsum">
    <table-sel :items="lipsum.items" />
</data-lipsum-countries>
```

## Slider

```vue
<data-lipsum-slider v-slot="lipsum">
    <table-sel :items="lipsum.items" :columns="[{label: 'title',read:v => v.title},{label:'img',slot:'img'},{label:'content',read:v => v.content}]">
        <template v-slot:img="slot">
            <img v-bind:src="slot.item.img" alt="" class="max-w200 max-h200">
        </template>
    </table-sel>
</data-lipsum-slider>
```
