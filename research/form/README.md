- должно быть 2 формы записи
    - в виде html
    - в виде json

## Step элементы

- https://formkit.com/playground?fkv=latest&fileTab=index.vue&css-framework=genesis&imports=jc%28%27name%21%27ImportMap%27%7Elang%21%27json%27%7Eeditor%21%27%28*+1vue%5C%211https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fvue%403%2Fdist%2Fvue.esm-browser.min.js0*%29*%27%29*%5Cn0%5C%271+0%0110*_&files=jc%5B%28%27Z%21%27index.vue%27%7EQ%21%27%3CscripUsetup%3E1imporUSYOneD.%2FsYOne.vue%3BSYTwoD.%2FsYTwo.vue%3BSYThreeD.%2FsYThree.vue%2211consUdata+%3D+%2810Z8John+FormKit%22%2C10email8hello%40%7F.com%22%2C10phone8%7B555%7D+555-5555%22%2C1%291%3C%2Fscript%3E1%3CQ%3E17form3+%3AactionsBfalse3%3E1%25target%250L1%3C%2FQ%3E1_07multi-sY3%3EA7sY3+ZBpersonalInfo3+%3AvalueBdata%60One%26L1A7sY3+ZBreferences%60Two%26L1A7sY3+ZBSupplemental%60Three%260%3CQ+%23sYNext%3EA007submit3%260%3C%2FQ%3EA0LAL1%27%7Esyntax%21%27%5E%2C%28%27Z%21%27%7F.config.js_%2F*+In+this+file%2C+exporUyour+final+config.1IUwill+automatically+be+injected+into+the+playground+for+you.1Imports+from+other+playground+files+are+supported.+*%2F11imporU%28+genesisIcons+%29D%40%7F%2Ficons%3B%28+rootClasses+%29D.%2F%7F.theme.js%3B%28+createM%24+%29D%40%7F%2Faddons%2211consUm%24+%3D+createM%24%7B%2810tabStyle8progress%22%2C10allowIncomplete%3A+false%2C1%29%7D11exporUdefaulU%2810plugins%3A+%5Bm%24%5D%2C10icons%3A+%28A...genesisIcons%2C10%29%2C10config%3A+%28ArootClasses%2C10%29%2C1%291%5E%2C%28%27Z%21%27sYOne.vue_%3CQ4textzName3AZBZ%2BavatarMan6310%2F4emailzEmail3AZBemail%2Bemail6%7Cemail310%2F4mask3AZBphone3AmaskB%7B%23%23%23%7D+%23%23%23-%23%23%23%23zPhone%2Btelephone69%2C%28%27Z%21%27sYTwo.vue_%3CQ4textarea3Avalidation-labelBReferenceszPlease+supply+contacUinformation+for+2+references69%2C%28%27Z%21%27sYThree.vue_%3CQ4textareazWhy+do+you+wanUto+work+here%3F6310%2F4radiozHow+did+you+hear+abouUus63A%3AoptionsB%5BA0%28+label8GoogleVgoogleXFacebookVfacebookXTwitterVtwitterXFriendVfriend%22+%29%2CA%5D9%5D0++1%5Cn3%5C%274%3E10%3CFormKitAtypeB63AvalidationBrequired70%3CFormKiUtypeB8%3A+%229310%2F%3E1%3C%2FQ%3E1%5EA100B%3D3D+from+%22L%3C%2FFormKit%3EQtemplateUt+V%22%2C+value8X%22+%29%2CA0%28+label8YtepZname_%27%7Eeditor%21%27z3AlabelB%24ultiSYPlugin%26+%2F%3EA0%2B3Aprefix-iconB%3B%221imporU%5E%27%7Eadded%21true%29%603%3EA00%3CSY%7Fformkit%01%7F%60%5E%3B%2B%26%24z_ZYXVUQLDBA98764310_
- https://formkit.com/plugins/multi-step

```html
<form-std>
    <page label="Personal Info">
        <input-string label="Name">
        <input-email label="Email" />
        <input-tel label="Phone" />
    </page>
    <page label="References">
        <input-textarea label="Please supply contact information for 2 references" />
    </page>
    <page label="Supplemental">
        <input-textarea label="Why do you want to work here?" />
        <input-enum-radios label="How did you hear about us">
            <option value="google">Google</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="friend">Friend</option>
        </input-enum-radios>
    </page>
</form-std>
```

## Примеры разметки

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

<form-bootstrap>
    <row span="6,6">
        <field name="email" />
        <field name="password" />
    </row>
    <field name="address" />
    <field name="address2" />
    <row span="6,4,2">
        <field name="city" />
        <field name="street"  />
        <field name="zip" />
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

<form-boostrap-hor>
    <!-- ✳️ Render custom content inside LABEL slot -->
    <input-email label-templ="<svg-ico-email class='w20 h20' /> Email" />
    <input-password label="Password" />
    <input-enum-radios label="Radios" :options="[
        {label: 'First radio', value: 1},
        {label: 'Second radio', value: 2},
        {label: 'Third radio', value: 3, disabled: true}
    ]" />
    <form-label-after><!-- ✳️ Render LABEL after INPUT -->
        <input-checkbox label="Example checkbox" />
    </form-label-after>
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

- https://www.justinmind.com/blog/form-examples-web-mobile/
- https://getbootstrap.com/docs/5.3/examples/checkout/
- https://getbootstrap.com/docs/5.3/examples/sign-in/
- https://getbootstrap.com/docs/5.3/forms/validation/
- https://knowledge.square-9.com/gf10/custom-field-validation
- https://crayons.freshworks.com/components/core/form/
- https://f36.contentful.com/components/form
- https://www.gravityforms.com/
- https://kickstart.formkit.com/
- https://formkit.com/
- https://vueformulate.com/guide/#inputs
- https://knowledge.square-9.com/gf10/custom-field-validation
- https://qform.io/
- https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-forms
- https://www.wufoo.com/gallery/templates/
- https://component.gallery/components/form/
- https://uiverse.io/forms
