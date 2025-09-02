# Virtual Grid

```vue
<virtual-grid :items="Array(10000).fill().map((v,i) => ({id: i}))" :getcellsize="(w) => [50, 50, Math.floor(w/50)]" class="w600 h200 resize oa">
    <template v-slot="slot">
        <div :style="slot.cell.style" class="flex-row-center border">
            id={{ slot.cell.item.id }}
        </div>
    </template>
</virtual-grid>
```
