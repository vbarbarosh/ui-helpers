
```vue
<data-vars v-slot="vars" :vars="{form: {}}">
    <div class="hsplit gap10">
        <div>
            <form-box v-model="vars.form" layout="form-layout-basic">
                <form-item type="header" label="Personal information" />
                <form-item layout="form-layout-columns" cols="5,5">
                    <form-item v-model="vars.form.first" type="string" label="First Name" />
                    <form-item v-model="vars.form.last" type="string" label="Last Name" />
                </form-item>

                <form-item type="header" label="Account Information" />
                <form-item v-model="vars.form.email" type="email" label="Email" />
                <form-item v-model="vars.form.password" type="password" label="Password" />
                <form-item v-model="vars.form.password2" type="password" label="Confirm" />

                <form-item v-model="vars.form.expand" type="expand" label="Personal information">
                    <form-item v-model="vars.form.first" type="string" label="First Name" />
                    <form-item v-model="vars.form.last" type="string" label="Last Name" />
                </form-item>

<!--                <form-item type="expand" label="Account Information">-->
<!--                    <form-item v-model="vars.form.email" type="email" label="Email" />-->
<!--                    <form-item v-model="vars.form.password" type="password" label="Password" />-->
<!--                    <form-item v-model="vars.form.password2" type="password" label="Confirm" />-->
<!--                </form-item>-->

<!--
                <form-item layout="form-layout-group" label="Personal information">
                    <form-item v-model="vars.form.first" type="string" label="First Name" />
                    <form-item v-model="vars.form.last" type="string" label="Last Name" />
                </form-item>
                <form-item layout="form-layout-group" label="Account Information">
                    <form-item v-model="vars.form.email" type="email" label="Email" />
                    <form-item v-model="vars.form.password" type="password" label="Password" />
                    <form-item v-model="vars.form.password2" type="password" label="Confirm" />
                </form-item>
-->
                <form-item v-model="vars.form.remember_me" type="checkbox" label="Remember me" />
            </form-box>
        </div>
        <div>
            <pre>{{ vars.form }}</pre>
        </div>
    </div>
</data-vars>
```
