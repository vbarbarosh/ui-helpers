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
