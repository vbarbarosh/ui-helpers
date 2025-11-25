vue_component('form-classic-item', {
    props: ['item'],
    inject: ['form_types'],
    template: `
        <template v-if="item.container">
            <render-function :fn="item.inst.render_container" />
        </template>
        <div v-else-if="(item.type === 'checkbox')" class="flex-row-center-left gap5">
            <form-render-control v-bind:item="item" />
            <form-render-label v-bind:item="item" />
        </div>
        <div v-else class="flex-col flex-align-stretch">
            <form-render-label v-bind:item="item" />
            <form-render-control v-bind:item="item" />
        </div>
    `,
});
