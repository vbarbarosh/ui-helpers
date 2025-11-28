# Forms

```vue
<data-vars v-slot="vars" v-bind:vars="{form: {}}">
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

---

```vue
<data-vars v-slot="vars" v-bind:vars="{form: {}}">
    <div class="hsplit">
        <div class="flex-col gap10">
            <form-box v-model="vars.form">
                <form-item path="audio_file" type="file" label="Audio File" />
            </form-box>
        </div>
        <div class="fluid">
            {{ vars }}
        </div>
    </div>
</data-vars>
```
