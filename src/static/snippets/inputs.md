# Inputs

```vue
<data-vars v-slot="vars">
    <div class="hsplit">
        <div class="flex-col gap10">
            <input-checkbox v-model="vars.checkbox" />
            <input-color v-model="vars.color" />
            <input-date v-model="vars.date" />
            <input-email v-model="vars.email" />
            <input-file v-model="vars.file" />
            <input-files v-model="vars.files" />
            <input-int v-model="vars.int" />
            <input-month v-model="vars.month" />
            <input-password v-model="vars.password" />
            <input-radio v-model="vars.radio" />
            <input-range v-model="vars.range" />
            <input-search v-model="vars.search" />
            <input-tel v-model="vars.tel" />
            <input-text v-model="vars.text" />
            <input-textarea v-model="vars.textarea" />
            <input-time v-model="vars.time" />
            <input-url v-model="vars.url" />
            <input-week v-model="vars.week" />
        </div>
        <div class="fluid">
            {{ vars }}
        </div>
    </div>
</data-vars>
```

## input-file-drop-zone

```vue
<data-vars v-slot="vars" :vars="{file: null}">
    <div class="hsplit gap15">
        <div class="fluid">
            <input-file-drop-zone v-model="vars.file" />
        </div>
        <div class="w400">
            {{ vars.file }}
        </div>
    </div>
</data-vars>
```

## input-files-drop-zone

```vue
<data-vars v-slot="vars" :vars="{files: []}">
<div class="hsplit gap15">
    <div class="fluid">
        <input-files-drop-zone v-model="vars.files" />
    </div>
    <div class="w400">
        <download-zip :files="vars.files.map(v => ({name: v.fullPath.slice(1), body: v}))" />
        <table-sel :items="vars.files" />
    </div>
</div>
</data-vars>
```
