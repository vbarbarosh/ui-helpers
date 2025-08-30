# download-zip

```vue
<download-zip :files="[{name: 'file1.txt', body: 'file1'}, {name: 'file2.txt', body: 'file2'}]" />
```

Download .zip with dogs

```vue
<data-lipsum-dogs v-slot="lipsum">
    <data-vars v-slot="vars" :vars="{selection: [], items: lipsum.items.map(image_url => ({image_url}))}">
        <div class="flex-row flex-align-center gap10 mb15">
            <button-refresh @click="lipsum.refresh" :disabled="lipsum.loading" />
            <button-json :value="lipsum.items" />
            <spinner v-if="lipsum.loading" />
        </div>
        <div class="hsplit gap10">
            <div class="fluid">
                <table-sel :selection="vars.selection" :items="vars.items" />
            </div>
            <div class="w600">
                {{ plural(vars.selection.length, '# image selected', '# images selected', 'No images selected') }}
                <hr>
                <download-zip :files="vars.selection.map(v => ({name: v.image_url.split('/').pop(), url: v.image_url}))" />
            </div>
        </div>
    </data-vars>
</data-lipsum-dogs>
```
