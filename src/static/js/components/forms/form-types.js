vue_component('form-types', {
    props: ['modelValue', 'items', 'types'],
    provide: function () {
        return {
            form_types: {
                checkbox: 'input-checkbox',
                checkboxes: 'input-checkboxes',
                color: 'input-color',
                date: 'input-date',
                email: 'input-email',
                file: 'input-file',
                files: 'input-files',
                int: 'input-int',
                month: 'input-month',
                password: 'input-password',
                radio: 'input-radio',
                radios: 'input-radios',
                range: 'input-range',
                search: 'input-search',
                select: 'input-select',
                'select-many': 'input-select-many',
                string: 'input-string',
                tel: 'input-tel',
                text: 'input-text',
                textarea: 'input-textarea',
                time: 'input-time',
                url: 'input-url',
                week: 'input-week',
            },
        };
    },
    template: `<slot />`,
});
