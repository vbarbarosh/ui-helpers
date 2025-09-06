function http_patch_json(url, body, options)
{
    return axios.patch(url, body, {responseType: 'json', ...options}).then(v => v.data);
}
