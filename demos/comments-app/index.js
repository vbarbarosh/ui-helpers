#!/usr/bin/env node

const body_parser = require('body-parser');
const cli = require('@vbarbarosh/node-helpers/src/cli');
const express = require('express');
const express_params = require('@vbarbarosh/express-helpers/src/express_params');
const express_routes = require('@vbarbarosh/express-helpers/src/express_routes');
const express_run = require('@vbarbarosh/express-helpers/src/express_run');
const fs_path_resolve = require('@vbarbarosh/node-helpers/src/fs_path_resolve');

cli(main);

async function main()
{
    const app = express();

    app.use(express.static(fs_path_resolve(__dirname, 'static')));
    app.use(body_parser.json());

    express_routes(app, [
        {req: 'GET /', fn: echo},
        ...require('./services/comments').routes,
        ...require('./services/thumbnailer').routes,
        {req: 'ALL *', fn: page404},
    ]);

    app.use(function (error, req, res, next) {
        if (res.headersSent) {
            return next(error);
        }
        console.log('[error]', error);
        res.status(500).json({message: error.message, stack: error.stack, raw: error});
    });

    await express_run(app);
}

async function echo(req, res)
{
    res.status(200).send(express_params(req));
}

async function page404(req, res)
{
    res.status(404).send(`Page not found: ${req.path}`);
}
