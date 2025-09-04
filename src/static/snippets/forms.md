# Forms

```vue
<data-vars v-slot="vars">
    <div class="hsplit">
        <div class="flex-col gap10">
            <form-vert>
                <form-item label="First Name">
                    <input-text v-model="vars.first_name" />
                </form-item>
                <form-item label="Last Name">
                    <input-text v-model="vars.last_name" />
                </form-item>
                <form-item label="Email">
                    <input-email v-model="vars.email" />
                </form-item>
                <div class="flex-row gap10">
                    <form-item>
                        <input-radio v-model="vars.gender" name="gender" option="Male" />
                        <form-label>Male</form-label>
                    </form-item>
                    <form-item>
                        <input-radio v-model="vars.gender" name="gender" option="Female" />
                        <form-label>Female</form-label>
                    </form-item>
                </div>
                <form-item label="Gender">
                    <input-select v-model="vars.gender" options="Male,Female" />
                </form-item>
                <button>Submit</button>
            </form-vert>
        </div>
        <div class="fluid">
            {{ vars }}
        </div>
    </div>
</data-vars>
```

## form-file-drop-zone

```vue
<data-vars v-slot="vars" :vars="{file: null}">
    <div class="hsplit gap15">
        <div class="fluid">
            <form-file-drop-zone v-model="vars.file" />
        </div>
        <div class="w400">
            {{ vars.file }}
        </div>
    </div>
</data-vars>
```

## form-files-drop-zone

```vue
<data-vars v-slot="vars" :vars="{files: []}">
<div class="hsplit gap15">
    <div class="fluid">
        <form-files-drop-zone v-model="vars.files" />
    </div>
    <div class="w400">
        <download-zip :files="vars.files.map(v => ({name: v.fullPath.slice(1), body: v}))" />
        <table-sel :items="vars.files" />
    </div>
</div>
</data-vars>
```
