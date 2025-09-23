
```vue
<data-vars v-slot="vars" :vars="{form: {}}">
    <div class="hsplit gap10">
        <div>
            <form-classic>
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
                <form-item v-model="vars.form.datepicker" type="el-date-picker" label="Date" />
                <form-item v-model="vars.form.department" type="department" label="Department" />
                <form-item v-model="vars.form.custom_props" type="el-select" label="form-item with type - default slot will be passed to the control">
                    <el-option :value="1" label="One" />
                    <el-option :value="2" label="Two" />
                    <el-option :value="3" label="Three" />
                </form-item>
            </form-classic>
        </div>
        <div>
            <pre>{{ vars.form }}</pre>
        </div>
    </div>
</data-vars>
```
