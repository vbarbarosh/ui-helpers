# Как создавать мета-компоненты | Как использовать компоненты для передачи мета-информации

Как сделать такое:

```html
<table-v2 :items>
    <column label="ID" prop="id" />
    <column label="Author" prop="author" />
    <column v-slot="slot" label="Size">
        {{ slot.item.width }}x{{ slot.item.height }}
    </column>
    <column label="Url" prop="url" />
    <column v-slot="slot" label="Thumbnail">
        <img :src="slot.item.download_url" alt="" class="max-w100 max-h100" />
    </column>
</table-v2>
```

## Начало

Обычно элементы используются для рендеринга, но иногда удобно использовать
элементы для настройки компонента.

Обычный способ передать параметры:

```html
<table-sel :items :columns="[
    {label: 'ID', read: v => v.id},
    {label: 'First Name', read: v => v.first_name},
    {label: 'Last Name', read: v => v.last_name},
    {label: 'Role', read: v => v.role},
]">
```

И вариант когда компонент настраивается через мета компоненты:

```html
<table-sel :items>
    <column :read="v => v.id" label="ID" />
    <column :read="v => v.first_name" label="First Name" />
    <column :read="v => v.last_name" label="Last Name" />
    <column :read="v => v.role" label="Role" />
</table-sel>
```

Второй вариант выглядит более естественным в xml/html. Его преимущестро будет более
очевидно в следующем случае:

```html
<table-sel :items>
    <column label="ID" prop="id"></column>
    <column label="First Name" prop="first_name" />
    <column label="Last Name" prop="last_name" />
    <column label="Role" prop="role" />
    <column v-slot="slot" label="Avatar">
        <img v-if="slot.item.avatar_url" src="slot.item.avatar_url" alt="" />
    </column>
</table-sel>
```

Через параметры это может выглядеть так:

```html
<table-sel :items :columns="[
    {label: 'ID', prop: 'id'},
    {label: 'First Name', prop: 'first_name'},
    {label: 'Last Name', prop: 'last_name'},
    {label: 'Role', prop: 'role'},
    {label: 'Avatar', slot: 'avatar'},
]">
    <template #avatar="slot">
        <img v-if="slot.item.avatar_url" src="slot.item.avatar_url" alt="" />
    </template>
</table-sel>
```

## Реализация

Реализация имеет очень шаблонный подход:

Компонент который хочет использвовать мета-компоненты, должен будет отдать default слот под такие компоненты.
render функция таких компонентов должна возвращать пустой массив. И при создании/удалении они должны будут
добавляться/удаляться из основного компонента.

```javascript
vue_component('table-sel', {
    props: ['items'],
    provide: function () {
        return {table: this};
    },
    template: `
        <slot />    <!-- Без этого слота у мета-компонентов не будет возможности создаться -->
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" v-bind:key="column.key">
                        <render-function v-bind:fn="column.inst.render_label" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td v-for="column in columns" v-bind:key="column.key">
                        <render-function v-bind:fn="column.inst.render_cell" v-bind:item="item" />
                    </td>
                </tr>
            </tbody>  
        </table>
    `,
    data: function () {
        return {
            columns: [],
        };
    },
    methods: {
        add_column: function (inst) {
            const key = crypto.randomUUID();
            const item = {key, inst};
            this.columns.push(item);
            return item;
        },
        remove_column: function (inst) {
            const i = this.columns.findIndex(v => v.inst === inst);
            if (i !== -1) {
                this.columns.splice(i, 1);
            }
        },
    },
});

vue_component('column', {
    props: ['prop', 'label'],
    inject: ['table'],
    render: function () {
        return [];
    },
    methods: {
        render_label: function (props) {
            if (this.$slots.label) {
                return this.$slots.label(props);
            }
            if (typeof this.label === 'string') {
                return this.label;
            }
            return null;
        },
        render_cell: function (props) {
            if (this.$slots.default) {
                return this.$slots.default(props);
            }
            return props.item[this.prop];
        },
    },
    created: function () {
        this.table.add_column(this);
    },
    unmounted: function () {
        this.table.remove_column(this);
    },
});

vue_component('render-function', {
    props: ['fn'],
    render: function () {
        return this.fn(this.$attrs);
    },
});
```

--- cut --- cut --- cut ---

Смысл в том, чтоб использовать html/markup/разметку для передачи данных.
Так же какая-то часть такой разметке должна служить в качестве template'а.

```html
<foo-container>
    <foo-item>
        <foo-label v-slot="slot">
            <span class="flex-row-center-left gap10">
                <svg-icon-ai class="w20 h20" /> Some label here | {{ slot }}
            </span>
        </foo-label>
    </foo-item>
    <foo-item />
    <foo-item />
</foo-container>
```

## Заключение

default слот можно использовать либо для мета-компонентов, либо для UI-компонентов.
Для того, чтоб его использовать и для тех и для других, идеально, должен быть препроцессинг темплейта.
Либо если хочется использовать default слот как UI-составляющую, нужно будет мета-компоненты делать
пустышками в том случае, если для них не предоставляется нужный inject. Но в этом случае такие пустышки будут
создаваться для каждой ячейки для которой нужно сделать рендеринг, что может повлиять на производительность
и память. Самое лучшее решение для таких случаев, как уже говорилось, делать препроцессинг темплейта и
принудительно раскидивать внутрениие компоненты по слотам.

Если коротко - либо default слот использовать для мета компонентов, либо для UI шаблонов.
