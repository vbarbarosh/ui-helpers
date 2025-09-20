# Forms 2

```vue
<data-vars v-slot="vars" :vars="{form: {}}">
    <div class="hsplit gap10">
        <div>
            <table>
                <tbody>
                <tr>
                    <th>el-checkbox-group</th>
                    <td>
                        <el-checkbox-group v-model="vars.checklist">
                            <el-checkbox v-once label="Option 1" :value="{obj: 1, value: 1, tick: win.Date.now()}" />
                            <el-checkbox v-once label="Option 2" :value="{obj: 2, value: 2, tick: win.Date.now()}" />
                        </el-checkbox-group>
                    </td>
                </tr>
                <tr>
                    <th>el-date-picker</th>
                    <td>
                        <el-date-picker v-model="vars.datepicker" placeholder="Pick a day" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            <pre>{{ vars }}</pre>
        </div>
    </div>
</data-vars>
```

```vue
<data-vars v-slot="vars" :vars="{form: {}}">
    <div class="hsplit gap10">
        <div>
            <form-classic>
                <form-item label="el-checkbox-group">
                    <template v-slot:label_outer="slot">
                        <label v-bind:for="slot.id" class="flex-row-center-left gap5">
                            <svg-icon-ai class="w20 h20" /> abc
                        </label>
                    </template>
                    <template v-slot:default="slot">
                        <el-checkbox-group v-model="vars.checklist" v-bind:id="slot.id">
                            <el-checkbox v-once label="Option 1" :value="{obj: 1, value: 1, tick: win.Date.now()}" />
                            <el-checkbox v-once label="Option 2" :value="{obj: 2, value: 2, tick: win.Date.now()}" />
                        </el-checkbox-group>
                    </template>
                </form-item>
                <form-item v-slot="slot" label="el-date-picker">
                    <el-date-picker v-model="vars.datepicker" v-bind:id="slot.id" placeholder="Pick a day" />
                </form-item>
            </form-classic>
        </div>
        <div>
            <pre>{{ vars }}</pre>
        </div>
    </div>
</data-vars>
```
