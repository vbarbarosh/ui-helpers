# Forms

```vue
<data-vars v-slot="vars">
    <div class="hsplit">
        <div class="flex-col gap10">
            <form-box v-model="vars.form">
                <form-item path="email" type="email" label="Email" />
                <form-item path="password" type="password" label="Password" />
                <form-item path="remember_me" type="checkbox" label="Remember me" />
            </form-box>
        </div>
        <div class="fluid">
            {{ vars }}
        </div>
    </div>
</data-vars>
```
