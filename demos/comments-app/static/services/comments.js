Object.assign(window, {
    comments_list: () => http_get_json('/api/v1/comments.json'),
    comments_fetch: item_uid => http_get_json(`/api/v1/comments/${item_uid}.json`),
    comments_create: item => http_post_json(`/api/v1/comments`, item),
    comments_update: item => http_patch_json(`/api/v1/comments/${item.uid}`, item),
    comments_remove: item => http_delete(`/api/v1/comments/${item.uid}`),
});
