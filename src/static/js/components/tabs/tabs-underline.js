vue_component('tabs-underline', {
    props: ['items'],
    template: `<tabs v-bind:items="items" class2="tabs-underline__root"><slot /></tabs>`,
});

css`
    .tabs-underline__root > .tab-header {
        display: flex;
        border-bottom: 1px solid #ddd;
        margin-bottom: 15px;
    }
    .tabs-underline__root > .tab-header > .tab-button {
        padding: 10px 20px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        position: relative;
        color: #6c757d;
        transition: all 0.3s;
    }
    .tabs-underline__root > .tab-header > .tab-button:hover {
        color: #495057;
    }
    .tabs-underline__root > .tab-header > .tab-button.active {
        color: #212529;
    }
    .tabs-underline__root > .tab-header > .tab-button.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 2px;
        background: #212529;
    }
    .tabs-underline__root > .tab-content {
        padding: 15px;
        line-height: 1.6;
    }
`;
