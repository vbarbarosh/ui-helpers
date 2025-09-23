# Forms 2

```vue
<data-vars v-slot="vars" :vars="{form: {}}">
    <div class="hsplit gap10">
        <div>
            <span class="p3 border">{{ tick() }}</span>
            <form-classic v-model="vars.form" :items="[{type: 'el-date-picker', path: 'ggg', label: 'HERE'}]">
                <form-type v-slot="slot" type="el-date-picker">
                    <el-date-picker v-model="slot.value" v-bind:id="slot.id" placeholder="Pick a day" />
                </form-type>
                <form-type v-slot="slot" type="department">
                    <el-select v-model="slot.value" v-bind:id="slot.id" :options="[
                        {value: 'marketing', label: 'Marketing ' + win.Date.now()},
                        {value: 'product', label: 'Product'},
                        {value: 'engineering', label: 'Engineering'},
                        {value: 'sales', label: 'Sales'},
                        {value: 'support', label: 'Customer Support'},
                    ]" />
                </form-type>
                <form-type v-slot="slot" type="el-select">
                    <el-select v-model="slot.value" v-bind:id="slot.id" v-bind="slot.other">
                        <slot-hack v-if="slot.slot_hack_defined" />
                    </el-select>
                </form-type>
<!--
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
-->
                <form-item v-slot="slot" label="el-date-picker">
                    <el-date-picker v-model="vars.datepicker" v-bind:id="slot.id" placeholder="Pick a day" />
                </form-item>
                <form-item v-model="vars.datepicker" type="el-date-picker" label="Whatever" />
                <form-item v-model="vars.department" type="department" label="Department" />
                <form-item v-model="vars.custom_props" type="el-select" label="form-item with custom props" :options="[
                    {value: 1, label: 'One'},
                    {value: 2, label: 'Two'},
                    {value: 3, label: 'Three'},
                ]" />
                <!-- ⚠️ Not Implemented (q: how to pass/forward content [default slot] to a template above?) -->
                <form-item v-model="vars.custom_props" type="el-select" label="form-item with type - default slot will be passed to the control">
                    <el-option :value="1" label="One" />
                    <el-option :value="2" label="Two" />
                    <el-option :value="3" label="Three" />
                </form-item>
            </form-classic>
        </div>
        <div>

            <el-select v-model="vars.custom_props">
                <el-option :value="1" label="One" />
                <el-option :value="2" label="Two" />
                <el-option :value="3" label="Three" />
            </el-select>

            <pre>{{ vars }}</pre>
        </div>
    </div>
</data-vars>
```
