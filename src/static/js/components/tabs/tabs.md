# Требования к компоненту `tabs`

1. У него должен быть эластичный контейнер. Табы - фиксированы, а вот содержимое должно
   подстраиваться контейнер в котором будет находиться компонент.
2. У компонента должен быть v-model для того, чтоб можно было сохранять текущий таб.

## (?) Как идентифицировать табы для сохранения. Таб нужно представлять в виде скаляра. Иначе как его сохранять?

Два способа для определения таба:
1) Числовой - 1, 2, 3, ...
2) По имени - demos, forms, details, help

Первый способ - простой. Его недостаток - при добавлении или удалении таба, или после смены порадка табов,
то что было сохранено может указывать на неверный таб.

```html
<div class="vsplit border w400 h400">
    <div class="h50 silver">
        Tabs are here...
    </div>
    <div class="fluid oa">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quae qui. Accusamus at cum cumque dicta dolor dolores eos et fuga in ipsa laborum maxime, officiis reiciendis repellat repudiandae similique.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quae qui. Accusamus at cum cumque dicta dolor dolores eos et fuga in ipsa laborum maxime, officiis reiciendis repellat repudiandae similique.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quae qui. Accusamus at cum cumque dicta dolor dolores eos et fuga in ipsa laborum maxime, officiis reiciendis repellat repudiandae similique.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quae qui. Accusamus at cum cumque dicta dolor dolores eos et fuga in ipsa laborum maxime, officiis reiciendis repellat repudiandae similique.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quae qui. Accusamus at cum cumque dicta dolor dolores eos et fuga in ipsa laborum maxime, officiis reiciendis repellat repudiandae similique.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, quae qui. Accusamus at cum cumque dicta dolor dolores eos et fuga in ipsa laborum maxime, officiis reiciendis repellat repudiandae similique.</p>
    </div>
</div>
```

## Пример использования

```vue
<tabs v-model="active_tab">
    <tabs-item label="First"></tabs-item>
    <tabs-item label="Second"></tabs-item>
    <tabs-item label="Third"></tabs-item>
</tabs>
```
