# v-autosize directive

```vue
<data-vars v-slot="vars" :vars="{value: 'hello\nwelcome\n'}">
    <p class="fs18">🪲 | with <b>flex-row</b> autosize does not shrinks its container, only grows.</p>
    <div class="flex-row gap15">
        <textarea v-model="vars.value" v-autosize></textarea>
        <textarea v-model="vars.value" v-autosize class="max-h200 oa vt"></textarea>
        <pre class="xm dashed">{{ vars.value }}</pre>
    </div>
</data-vars>
```
