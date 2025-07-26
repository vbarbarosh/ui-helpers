# Lipsum • Countries

```vue
<data-vars v-slot="vars" :vars="{selection: []}">
    <data-lipsum-countries v-slot="countries">
        <data-filter v-slot="filter" :items="countries.items" prop="name">
            <input-str v-model="filter.pattern" />
            <button-selection :value="vars.selection" />
            <table-sel :selection="vars.selection" :items="filter.computed_items" />
        </data-filter>
    </data-lipsum-countries>
</data-vars>
```
