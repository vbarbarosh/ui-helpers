const Promise = require('bluebird');
const fs_list = require('@vbarbarosh/node-helpers/src/fs_list');
const fs_read_json = require('@vbarbarosh/node-helpers/src/fs_read_json');
const fs_write = require('@vbarbarosh/node-helpers/src/fs_write');
const now_fs = require('@vbarbarosh/node-helpers/src/now_fs');
const sanitize_var_name = require('@vbarbarosh/node-helpers/src/sanitize_var_name');
const fs_rm = require('@vbarbarosh/node-helpers/src/fs_rm');

const routes = [
    {req: 'GET /api/v1/comments.json', fn: comments_list},
    {req: 'GET /api/v1/comments/:comment_uid.json', fn: comments_fetch},
    {req: 'POST /api/v1/comments', fn: comments_create},
    {req: 'PATCH /api/v1/comments/:comment_uid', fn: comments_update},
    {req: 'DELETE /api/v1/comments/:comment_uid', fn: comments_remove},
];

// GET /api/v1/comments.json
async function comments_list(req, res)
{
    const out = [];
    for (const file of await fs_list(`${__dirname}/../data/comments`)) {
        if (file.basename.endsWith('.json')) {
            const item = await fs_read_json(file.pathname);
            item.body = item.body.slice(0, 50) + '...';
            out.push(item);
        }
    }
    res.send(out);
}

// GET /api/v1/comments/:comment_uid.json
async function comments_fetch(req, res)
{
    await Promise.delay(1000);
    const uid = sanitize_var_name(req.params.comment_uid);
    try {
        const file = `${__dirname}/../data/comments/${uid}.json`;
        const item = await fs_read_json(file);
        res.send(item);
    }
    catch (error) {
        res.status(404).send(error);
    }
}

// POST /api/v1/comments
async function comments_create(req, res)
{
    await Promise.delay(1000);
    const uid = `com_${now_fs()}`
    const item = {
        uid,
        parent_uid: null,
        body: req.body.body,
    };
    const file = `${__dirname}/../data/comments/${uid}.json`;
    await fs_write(file, JSON.stringify(item, null, 4));
    res.send();
}

// DELETE /api/v1/comments/:comment_uid
async function comments_remove(req, res)
{
    await Promise.delay(1000);
    const uid = sanitize_var_name(req.params.comment_uid);
    try {
        const file = `${__dirname}/../data/comments/${uid}.json`;
        await fs_rm(file);
        res.send();
    }
    catch (error) {
        res.status(404).send(error);
    }
}

// PATCH /api/v1/comments/:comment_uid
async function comments_update(req, res)
{
    const uid = sanitize_var_name(req.params.comment_uid);
    try {
        await Promise.delay(1000);
        const file = `${__dirname}/../data/comments/${uid}.json`;
        const item = await fs_read_json(file);
        item.body = req.body.body;
        await fs_write(file, JSON.stringify(item, null, 4));
        res.send(item);
    }
    catch (error) {
        res.status(404).send(error);
    }
}

module.exports = {routes};
