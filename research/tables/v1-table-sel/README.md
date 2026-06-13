table-sel

How to add props/event to TR element

Ideally:
```html
<table-sel :items="items" :columns="columns">
    <template v-slot:tr="{item}">
        <tr v-on:mouseover="mouseover(item)" />
    </template>
</table-sel>
```

But, it already has slots:
```html
<table-sel :items="items" :columns="columns">
    <template v-slot:action="{item}">
        <button>copy</button>
        <button>remove</button>
    </template>
</table-sel>
```

The following is good enough:
```html
<table-sel :items="items" :columns="columns">
    <template v-slot:tr="{item}">
        <tr v-on:mouseover="mouseover(item)" />
    </template>
    <template v-slot:action="{item}">
        <button>copy</button>
        <button>remove</button>
    </template>
</table-sel>
```
