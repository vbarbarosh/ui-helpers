#!/usr/bin/env node

const Promise = require('bluebird');
const cli = require('@vbarbarosh/node-helpers/src/cli');
const fs_list_deep = require('@vbarbarosh/node-helpers/src/fs_list_deep');
const fs_path_relative = require('@vbarbarosh/node-helpers/src/fs_path_relative');
const fs_path_resolve = require('@vbarbarosh/node-helpers/src/fs_path_resolve');
const fs_read_utf8 = require('@vbarbarosh/node-helpers/src/fs_read_utf8');
const fs_write = require('@vbarbarosh/node-helpers/src/fs_write');
const perf_end_human = require('@vbarbarosh/node-helpers/src/perf_end_human');
const perf_start = require('@vbarbarosh/node-helpers/src/perf_start');
const pkg = require('../package.json');

cli(main);

async function main()
{
    const time0 = perf_start();

    const files = [
        `${__dirname}/../README.md`,
        `${__dirname}/../src`,
    ];

    for (const file of await Promise.map(files, fs_list_deep).then(v => v.flat())) {
        if (file.isDirectory() || !file.basename.match(/\.(md|js|html)$/)) {
            continue;
        }

        const body = await fs_read_utf8(file.pathname);

        // <script src="https://unpkg.com/@vbarbarosh/ui-helpers@0.3.2/src/static/js/bundle.js"></script>
        const body2 = body.replace(/(@vbarbarosh\/ui-helpers@).+?\//g, function (match, m1) {
            const out = `${m1}${pkg.version}/`;
            if (match !== out) {
                console.log(`🔁 [${relative(file.pathname)}] ${match} → ${out}`);
            }
            return out;
        });

        // "@vbarbarosh/ui-helpers": "^0.3.2"
        const body3 = body2.replace(/("@vbarbarosh\/ui-helpers":\s*)"(\D?).+?"/g, function (match, m1, m2) {
            const out = `${m1}"${m2}${pkg.version}"`;
            if (match !== out) {
                console.log(`🔁 [${relative(file.pathname)}] ${match} → ${out}`);
            }
            return out;
        });

        if (body !== body3) {
            console.log(`💾 [${relative(file.pathname)}] Saving...`);
            await fs_write(file.pathname, body3);
        }
    }

    console.log(`🎉 Done in ${perf_end_human(time0)}`);
}

function relative(path)
{
    return fs_path_relative(fs_path_resolve(__dirname, '..'), path);
}
