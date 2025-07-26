# Tabs

## Tabs in HTML

```vue
<tabs-underline>
    <tabs-item label="Foo"><lipsum /></tabs-item>
    <tabs-item label="Bar"><lipsum /></tabs-item>
    <tabs-item label="Baz"><lipsum /></tabs-item>
</tabs-underline>
```

## Tabs in props

```vue
<tabs :items="[
    {label: 'Foo', component: {is: 'lipsum', n: 10}},
    {label: 'Bar', active: true, component: 'lipsum'},
    {label: 'Baz', component: 'lipsum'}]" />
```
