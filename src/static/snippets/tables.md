# Tables

## microsoftedge.github.io/Demos/json-dummy-data/64KB.json

```vue
<data-vars v-slot="vars" :vars="{selection: []}">
<data-fetch v-slot="fetch" url="https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json" auto>
    <div class="sticky-t flex-row flex-align-center gap10 mb15 white">
        <button-refresh v-on:click="fetch.refresh" :disabled="fetch.loading" />
        <button-json :value="fetch.response" />
        <button-selection :value="vars.selection" />
        <spinner v-if="fetch.loading" />
    </div>
    <table-sel :selection="vars.selection" :items="fetch.response" :columns="[
            {label: 'name', read: v => v.name},
            {label: 'language', read: v => v.language},
            {label: 'id', read: v => v.id},
            {label: 'bio', read: v => v.bio},
            {label: 'version', read: v => v.version},
            {component: 'button-json'},
        ]">
        <template v-slot:picture="{item}">
            <img :src="thumbnailer(item.picture.large, {w: 50})" alt="" />
        </template>
    </table-sel>
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
