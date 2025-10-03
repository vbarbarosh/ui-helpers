# Forms

## Experiments

```vue
<data-vars v-slot="vars" :vars="{form: {}, whatever: false, items: [
                {type: 'string', path: 'first_name', label: 'First Name'},
                {type: 'string', path: 'last_name', label: 'Last Name'},
                {type: 'color', path: 'favorite_color', label: 'Favorite Color'},
                {type: 'checkbox', path: 'terms', label: 'Accept terms'},
                {type: 'radios', path: 'favorite_fruit', label: 'Favorite Fruit', options: [
                    {value: 'apple', label: 'Apple'},
                    {value: 'banana', label: 'Banana'},
                    {value: 'orange', label: 'Orange'},
                    {value: 'mango', label: 'Mango'},
                    {value: 'strawberry', label: 'Strawberry'},
                    {value: 'grapes', label: 'Grapes'},
                    {value: 'watermelon', label: 'Watermelon'},
                    {value: 'pineapple', label: 'Pineapple'},
                    {value: 'avocado', label: 'Avocado'},
                    {value: 'blueberry', label: 'Blueberry'},
                ]},
                {type: 'select-many', path: 'favorite_fruits', label: 'Favorite Fruits', options: [
                    {value: 'apple', label: 'Apple'},
                    {value: 'banana', label: 'Banana'},
                    {value: 'orange', label: 'Orange'},
                    {value: 'mango', label: 'Mango'},
                    {value: 'strawberry', label: 'Strawberry'},
                    {value: 'grapes', label: 'Grapes'},
                    {value: 'watermelon', label: 'Watermelon'},
                    {value: 'pineapple', label: 'Pineapple'},
                    {value: 'avocado', label: 'Avocado'},
                    {value: 'blueberry', label: 'Blueberry'},
                ]},
                {type: 'int', path: 'favorite_int', label: 'Favorite integer between 500 and 1000', min: 500, max: 1000},
            ]}">
    <div class="hsplit gap10">
        <div class="w300">
            <span class="p2 border">{{ tick() }}</span>
            <span v-if="vars.whatever">HELLO</span>
            <form-classic v-model="vars.form" :items="vars.items" />
            <hr class="mv25">
            <div class="flex-col flex-align-stretch gap10">
                <input-string v-model="vars.form.first_name" label="First Name" />
                <input-string v-model="vars.form.last_name" label="Last Name" />
                <input-color v-model="vars.form.favorite_color" label="Favorite Color" />
                <input-checkbox v-model="vars.form.terms" label="Accept terms" />
                <input-radios v-model="vars.form.favorite_fruit" label="Favorite Fruit" :options="vars.fruits ??= [
                    {value: 'apple', label: 'Apple'},
                    {value: 'banana', label: 'Banana'},
                    {value: 'orange', label: 'Orange'},
                    {value: 'mango', label: 'Mango'},
                    {value: 'strawberry', label: 'Strawberry'},
                    {value: 'grapes', label: 'Grapes'},
                    {value: 'watermelon', label: 'Watermelon'},
                    {value: 'pineapple', label: 'Pineapple'},
                    {value: 'avocado', label: 'Avocado'},
                    {value: 'blueberry', label: 'Blueberry'},
                ]" />
                <input-select-many v-model="vars.form.favorite_fruits" label="Favorite Fruits" :options="vars.fruits ??= [
                    {value: 'apple', label: 'Apple'},
                    {value: 'banana', label: 'Banana'},
                    {value: 'orange', label: 'Orange'},
                    {value: 'mango', label: 'Mango'},
                    {value: 'strawberry', label: 'Strawberry'},
                    {value: 'grapes', label: 'Grapes'},
                    {value: 'watermelon', label: 'Watermelon'},
                    {value: 'pineapple', label: 'Pineapple'},
                    {value: 'avocado', label: 'Avocado'},
                    {value: 'blueberry', label: 'Blueberry'},
                ]" />
                <input-int v-model="vars.form.favorite_int" label="Favorite integer between 500 and 1000" min="500" max="1000" />
            </div>
            <button v-on:click="vars.whatever = !vars.whatever">toggle</button>
        </div>
        <div>
            <pre>{{ vars.form }}</pre>
        </div>
    </div>
</data-vars>
```

## Inputs
```vue
<data-vars v-slot="vars" :vars='
{
  "checkbox": false,
  "color": "#3dd18c",
  "date": "2025-09-02",
  "email": "some@email.com",
  "int": 12345,
  "month": "2025-01",
  "password": "abcdef",
  "range": "74",
  "search": "xxx",
  "string": "some string",
  "tel": "555-12-333",
  "text": "some text",
  "textarea": "some text line 1\nsome text line 2\nsome text line 3\n...\n",
  "time": "13:53",
  "url": "https://example.com/foo/bar",
  "week": "2020-W01",
  "select": "strawberry",
  "checkboxes": [
    "mango",
    "grapes",
    "orange",
    "strawberry"
  ],
  "radios": "strawberry",
  "select_many": [
    "banana",
    "mango",
    "avocado"
  ]
}'>
    <div class="hsplit gap15">
        <div>
            <table>
                <tbody>
                <tr>
                    <th>input-checkbox</th>
                    <td><input-checkbox v-model="vars.checkbox" /></td>
                    <td>{{ vars.checkbox }}</td>
                </tr>
                <tr>
                    <th>input-checkboxes</th>
                    <td><input-checkboxes v-model="vars.checkboxes" :options="[
                        {value: 'apple', label: 'Apple'},
                        {value: 'banana', label: 'Banana'},
                        {value: 'orange', label: 'Orange'},
                        {value: 'mango', label: 'Mango'},
                        {value: 'strawberry', label: 'Strawberry'},
                        {value: 'grapes', label: 'Grapes'},
                        {value: 'watermelon', label: 'Watermelon'},
                        {value: 'pineapple', label: 'Pineapple'},
                        {value: 'avocado', label: 'Avocado'},
                        {value: 'blueberry', label: 'Blueberry'},
                    ]" /></td>
                    <td>{{ vars.checkboxes }}</td>
                </tr>
                <tr>
                    <th>input-color</th>
                    <td><input-color v-model="vars.color" /></td>
                    <td>{{ vars.color }}</td>
                </tr>
                <tr>
                    <th>input-date</th>
                    <td><input-date v-model="vars.date" /></td>
                    <td>{{ vars.date }}</td>
                </tr>
                <tr>
                    <th>input-email</th>
                    <td><input-email v-model="vars.email" /></td>
                    <td>{{ vars.email }}</td>
                </tr>
                <tr>
                    <th>input-file</th>
                    <td><input-file v-model="vars.file" /></td>
                    <td>{{ vars.file }}</td>
                </tr>
                <tr>
                    <th>input-files</th>
                    <td><input-files v-model="vars.files" /></td>
                    <td>{{ vars.files }}</td>
                </tr>
                <tr>
                    <th>input-int</th>
                    <td><input-int v-model="vars.int" /></td>
                    <td>{{ vars.int }}</td>
                </tr>
                <tr>
                    <th>input-month</th>
                    <td><input-month v-model="vars.month" /></td>
                    <td>{{ vars.month }}</td>
                </tr>
                <tr>
                    <th>input-password</th>
                    <td><input-password v-model="vars.password" /></td>
                    <td>{{ vars.password }}</td>
                </tr>
                <tr>
                    <th>input-radio</th>
                    <td><input-radio v-model="vars.radio" /></td>
                    <td>{{ vars.radio }}</td>
                </tr>
                <tr>
                    <th>input-radios</th>
                    <td><input-radios v-model="vars.radios" :options="[
                        {value: 'apple', label: 'Apple'},
                        {value: 'banana', label: 'Banana'},
                        {value: 'orange', label: 'Orange'},
                        {value: 'mango', label: 'Mango'},
                        {value: 'strawberry', label: 'Strawberry'},
                        {value: 'grapes', label: 'Grapes'},
                        {value: 'watermelon', label: 'Watermelon'},
                        {value: 'pineapple', label: 'Pineapple'},
                        {value: 'avocado', label: 'Avocado'},
                        {value: 'blueberry', label: 'Blueberry'},
                    ]" /></td>
                    <td>{{ vars.radios }}</td>
                </tr>
                <tr>
                    <th>input-range</th>
                    <td><input-range v-model="vars.range" /></td>
                    <td>{{ vars.range }}</td>
                </tr>
                <tr>
                    <th>input-search</th>
                    <td><input-search v-model="vars.search" /></td>
                    <td>{{ vars.search }}</td>
                </tr>
                <tr>
                    <th>input-select</th>
                    <td><input-select v-model="vars.select" :options="[
                        {value: 'apple', label: 'Apple'},
                        {value: 'banana', label: 'Banana'},
                        {value: 'orange', label: 'Orange'},
                        {value: 'mango', label: 'Mango'},
                        {value: 'strawberry', label: 'Strawberry'},
                        {value: 'grapes', label: 'Grapes'},
                        {value: 'watermelon', label: 'Watermelon'},
                        {value: 'pineapple', label: 'Pineapple'},
                        {value: 'avocado', label: 'Avocado'},
                        {value: 'blueberry', label: 'Blueberry'},
                    ]" /></td>
                    <td>{{ vars.select }}</td>
                </tr>
                <tr>
                    <th>input-select-many</th>
                    <td><input-select-many v-model="vars.select_many" :options="[
                        {value: 'apple', label: 'Apple'},
                        {value: 'banana', label: 'Banana'},
                        {value: 'orange', label: 'Orange'},
                        {value: 'mango', label: 'Mango'},
                        {value: 'strawberry', label: 'Strawberry'},
                        {value: 'grapes', label: 'Grapes'},
                        {value: 'watermelon', label: 'Watermelon'},
                        {value: 'pineapple', label: 'Pineapple'},
                        {value: 'avocado', label: 'Avocado'},
                        {value: 'blueberry', label: 'Blueberry'},
                    ]" /></td>
                    <td>{{ vars.select_many }}</td>
                </tr>
                <tr>
                    <th>input-string</th>
                    <td><input-string v-model="vars.string" /></td>
                    <td>{{ vars.string }}</td>
                </tr>
                <tr>
                    <th>input-tel</th>
                    <td><input-tel v-model="vars.tel" /></td>
                    <td>{{ vars.tel }}</td>
                </tr>
                <tr>
                    <th>input-text</th>
                    <td><input-text v-model="vars.text" /></td>
                    <td>{{ vars.text }}</td>
                </tr>
                <tr>
                    <th>input-textarea</th>
                    <td><input-textarea v-model="vars.textarea" /></td>
                    <td>{{ vars.textarea }}</td>
                </tr>
                <tr>
                    <th>input-time</th>
                    <td><input-time v-model="vars.time" /></td>
                    <td>{{ vars.time }}</td>
                </tr>
                <tr>
                    <th>input-url</th>
                    <td><input-url v-model="vars.url" /></td>
                    <td>{{ vars.url }}</td>
                </tr>
                <tr>
                    <th>input-week</th>
                    <td><input-week v-model="vars.week" /></td>
                    <td>{{ vars.week }}</td>
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

## Basic (input + label in a single element)

```vue
<data-vars v-slot="vars" :vars="{form: {}}">
    <div class="flex-row gap15">
        <div>
            <form-string v-model="vars.form.first_name" label="First Name" />
            <form-string v-model="vars.form.last_name" label="Last Name" />
            <form-int v-model="vars.form.age" label="Age" />
            <input-select v-model="vars.form.gender" label="Gender" :options="[
                {value: 'male', label: 'Male'},
                {value: 'female', label: 'Female'},
            ]" />
        </div>
        <div class="flex-fluid">
            <pre>{{ vars }}</pre>
        </div>
    </div>
</data-vars>
```

## Basic (input and label are separate elements)

```html
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
                    <input-select v-model="vars.gender" :options="[
                        {value: 'Male', label: 'Male'},
                        {value: 'Female', label: 'Femail'},
                    ]" />
                </form-item>
                <button>Submit</button>
            </form-vert>
        </div>
        <div class="fluid">
            { vars }
        </div>
    </div>
</data-vars>
```
