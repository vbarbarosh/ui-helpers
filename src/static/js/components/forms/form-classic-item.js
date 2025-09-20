vue_component('form-classic-item', {
    props: ['value', 'item'],
    template: `
        <div v-if="(item.type === 'checkbox')" class="flex-row-center-left gap5">
            <form-render-control v-bind:value="value" v-bind:item="item" />
            <form-render-label v-bind:value="value" v-bind:item="item" />
        </div>
        <div v-else class="flex-col flex-align-stretch">
            <form-render-label v-bind:value="value" v-bind:item="item" />
            <form-render-control v-bind:value="value" v-bind:item="item" />
        </div>
    `,
});
