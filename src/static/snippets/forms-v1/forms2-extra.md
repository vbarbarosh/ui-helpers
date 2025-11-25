
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


