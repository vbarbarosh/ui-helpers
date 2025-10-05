#!/usr/bin/env node

const cli = require('@vbarbarosh/node-helpers/src/cli');

cli(main);

async function main()
{
    const items = [{value: 1}, {value: 2}, {value: 3, children: [{value: 'a1'}, {value: 'a2'}, {value: 'a3'}]}, {value: 4}];

    for (const item of items) {
        console.log(item.value);
    }
}
