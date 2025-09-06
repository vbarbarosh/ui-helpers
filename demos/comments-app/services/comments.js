const Promise = require('bluebird');
const fs_list = require('@vbarbarosh/node-helpers/src/fs_list');
const fs_read_json = require('@vbarbarosh/node-helpers/src/fs_read_json');
const fs_write = require('@vbarbarosh/node-helpers/src/fs_write');
const sanitize_dash_name = require('@vbarbarosh/node-helpers/src/sanitize_dash_name');

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
    const uid = sanitize_dash_name(req.params.comment_uid);
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
    res.send();
}

// DELETE /api/v1/comments/:comment_uid
async function comments_remove(req, res)
{
    res.send();
}

// PATCH /api/v1/comments/:comment_uid
async function comments_update(req, res)
{
    const uid = sanitize_dash_name(req.params.comment_uid);
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
