# Observable Plot

```vue
<plot :params="{
        marks: [
            Plot.frame(),
            Plot.text(['Hello, world!'], {frameAnchor: 'middle'}),
        ],
    }" />
```

```vue
<data-vars v-slot="{data}" :vars="{
        data: Array.from({length: 100}, function (_, i) {
            const x = 50 - i; // Range: -10 to +10 (adjust as needed)
            const y = x**2 + 2*x + 15; // f(x) = x² + 2x + 15
            return {x, y};
        }),
}">
    <plot :params="{
            marks: [
                Plot.frame(),
                Plot.text(['f(x) = x² + 2x + 15'], {frameAnchor: 'middle'}),
                Plot.line(data, {x: 'x', y: 'y'}),
                Plot.gridX(),
                Plot.gridY(),
            ],
        }" />
</data-vars>
```

```vue
<plot :params="{
        marks: [
            Plot.rectY({length: 10000}, Plot.binX({y: 'count'}, {x: d3.randomNormal()})),
        ],
    }" />
```

```vue
<data-lipsum-penguins v-slot="{items: penguins}">
    <plot :params="{
            marks: [Plot.dot(penguins, {x: 'culmen_length_mm', y: 'culmen_depth_mm', stroke: 'species'})],
        }" />
</data-lipsum-penguins>
```

```vue
<data-lipsum-penguins v-slot="{items: penguins}">
    <plot :params="{
            marks: [Plot.dot(penguins, {x: 'culmen_length_mm', y: 'culmen_depth_mm', stroke: 'species'})]
        }" />
</data-lipsum-penguins>
```

```vue
<data-lipsum-penguins v-slot="{items: penguins}">
    <plot :params="{
          grid: true,
          aspectRatio: 1,
          inset: 10,
          x: {tickSpacing: 80, label: 'Culmen length (mm)', grid: false},
          y: {tickSpacing: 80, label: 'Culmen depth (mm)', grid: true},
          color: {legend: true},
          marks: [
            Plot.frame(),
            Plot.dot(penguins, {x: 'culmen_length_mm', y: 'culmen_depth_mm', stroke: 'species'})
          ]
        }" />
</data-lipsum-penguins>
```

```vue
<data-lipsum-penguins v-slot="{items: penguins}">
    <plot :params="{
          marginLeft: 80,
          marginRight: 80,
          marks: [
            Plot.barX(penguins, Plot.groupY({x: 'count'}, {y: 'species'})),
            Plot.ruleX([0])
          ]
        }" />
</data-lipsum-penguins>
```

```vue
<data-lipsum-penguins v-slot="{items: penguins}">
    <plot :params="{
            marginLeft: 80,
            marginRight: 80,
            marks: [
                Plot.barX(penguins, Plot.groupY({x: 'count'}, {fy: 'island', y: 'species'})),
                Plot.ruleX([0])
            ]
        }" />
</data-lipsum-penguins>
```

```vue
<data-lipsum-penguins v-slot="{items: penguins}">
    <plot :params="{
            marginLeft: 80,
            marginRight: 80,
            color: {legend: true},
            marks: [
                Plot.barX(penguins, Plot.groupY({x: 'count'}, {fy: 'island', y: 'species', fill: 'sex'})),
                Plot.ruleX([0])
            ]
        }" />
</data-lipsum-penguins>
```
