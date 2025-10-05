#!/usr/bin/env node

const cli = require('@vbarbarosh/node-helpers/src/cli');

cli(main);

async function main()
{
    const items = gen([{value: 1}, {value: 2}, {value: 3, children: [{value: 'a1'}, {value: 'a2'}, {value: 'a3'}]}, {value: 4}]);

    for (const item of items) {
        console.log(item.value);
    }
}

function* gen(items)
{
    for (const item of items) {
        if (item.children) {
            yield* item.children;
        }
        else {
            yield item;
        }
    }
}
