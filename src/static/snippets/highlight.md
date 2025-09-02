# Highlight

Highlight search results.

```vue
<data-vars v-slot="vars" :vars="{substring: 'set'}">
    <input-text v-model="vars.substring" v-autofocus />
    <br>
    <highlight :substring="vars.substring" text="A set of ready components for fast prototyping." />
</data-vars>
```
