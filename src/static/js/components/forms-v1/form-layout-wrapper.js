vue_component('form-layout-wrapper', {
    props: ['inst', 'items', 'wrapper', 'layout2'],
    template: `
        <component v-bind:is="wrapper">
            <component v-bind:is="(layout2 ?? 'layout-basic')" :items />
        </component>
    `,
});
