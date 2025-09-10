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
