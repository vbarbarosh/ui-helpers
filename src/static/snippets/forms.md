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
