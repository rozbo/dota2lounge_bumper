/**
 * Created by rozbo on 2017/5/26.
 */
var request =require('superagent');
var config = require('./config');


function get(url) {
    return request.get(url)
        .set('pragma','no-cache')
        .set('cache-control','no-cache')
        .set('upgrade-insecure-requests',1)
        .set('Cookie',config.cookie)
        .set('accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
        .set('accept-encoding','gzip, deflate, sdch, br')
        .set('accept-language','en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4')
        .set('user-agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36')
        .set('dnt','1')
        .set('upgrade-insecure-requests',1)
}
function post(url) {
    return request.post(url)
        .set('pragma','no-cache')
        .set('cache-control','no-cache')
        .set('upgrade-insecure-requests',1)
        .set('Cookie',config.cookie)
        .set('accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
        .set('accept-encoding','gzip, deflate, sdch, br')
        .set('accept-language','en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4')
        .set('user-agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36')
        .set('dnt','1')
        .set('upgrade-insecure-requests',1)
        .type('form');
}
exports = module.exports;
exports.get = get;
exports.post = post;