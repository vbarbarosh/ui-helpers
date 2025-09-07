- должно быть 2 формы записи
    - в виде html
    - в виде json

```html
<form-classic>
    <form-group label="Personal information">
        <input-text v-model="form1.first_name" label="First name" />
        <input-text v-model="form1.last_name" label="Last name" />
    </form-group>
    <form-group label="Account information">
        <input-text v-model="form1.email" label="Email" />
        <input-text v-model="form1.password" label="Password" />
        <input-text v-model="form1.password2" label="Password Confirm" />
    </form-group>
    <input-checkbox v-model="form1.remember_me" label="Remember me" />
    <input-enum-radios v-model="form1.sex" :options="[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]" label="Sex" />
</form-classic>

<form-bootstrap>
    <row>
        <field name="email" span="6" />
        <field name="password" span="6" />
    </row>
    <field name="address" />
    <field name="address2" />
    <row>
        <field name="city" span="6" />
        <field name="street" span="4"  />
        <field name="zip" span="2" />
    </row>
    <field name="check_me_out" />
</form-bootstrap>

<form-classic>
    <group label="Personal information">
        <field name="first_name" />
        <field name="last_name" />
    </group>
    <group label="Account information">
        <field name="email" />
        <field name="password" />
        <field name="password2" />
    </group>
    <field name="remember_me" />
    <field name="sex" />
</form-classic>

<form-boostrap-hor>
    <input-email label="Email" />
    <input-password label="Password" />
    <input-enum-radios label="Radios" :options="[
        {label: 'First radio', value: 1},
        {label: 'Second radio', value: 2},
        {label: 'Third radio', value: 3, disabled: true}
    ]" />
    <input-checkbox label2="Example checkbox" />
    <button-blue>Sign in</button-blue>
</form-boostrap-hor>

<form-table>
    <input-text v-model="form1.first_name" label="First name" />
    <input-text v-model="form1.last_name" label="Last name" />
    <input-text v-model="form1.email" label="Email" />
    <input-text v-model="form1.password" label="Password" />
    <input-text v-model="form1.password2" label="Password Confirm" />
    <input-checkbox v-model="form1.remember_me" label="Remember me" />
    <input-enum-radios v-model="form1.sex" :options="[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]" label="Sex" />
</form-table>
```

## Resources

- https://formkit.com/
- https://vueform.com/
- https://primevue.org/treeselect/
- https://element-plus.org/en-US/component/overview.html
