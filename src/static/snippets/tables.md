# Tables

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
