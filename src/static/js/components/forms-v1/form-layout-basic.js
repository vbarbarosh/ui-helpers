vue_component('form-layout-basic', {
    props: ['inst', 'items'],
    template: `
        <div class="mg10 numerate">
            <template v-for="(item,i) in items" v-bind:key="item.key">
                <template v-if="(item.inst.insertions.container)">
                    <div><render-function :fn="item.inst.insertions.container" /></div>
                </template>
                <template v-else-if="(item.inst.insertions.label && item.inst.insertions.control)">
                    <div class="hsplit gap10">
                        <div class="w150"><render-function :fn="item.inst.insertions.label" /></div>
                        <div class="fluid"><render-function :fn="item.inst.insertions.control" /></div>
                    </div>
                </template>
                <template v-else>
                    <form-invalid-layout-item-type :item />
                </template>
            </template>
        </div>
    `,
});

css`
    .numerate {
        counter-reset: numerate;
    }
    .numerate > *::before {
        counter-increment: numerate;
        content: "#" counter(numerate) " ";
    }
`;