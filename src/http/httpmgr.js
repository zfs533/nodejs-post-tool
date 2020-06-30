let HttpRequest = require("./httprequest");
module.exports = {
    POST: "POST",
    GET: "GET",
    reqUrls: {
        login: "/admin/login",
    },
    /**
     * 
     * @param {服务器地址} url https://supersignhub.com
     */
    async init(url) {
        HttpRequest.init(url);
    },
    /**
    * 
    * @param {请求路径} url 
    * @param {请求方式 get post} type 
    * @param {请求参数} requestData 
    * @param {回调函数} callbk 
    */
    async startRequest(url, requestData, type, callbk) {
        if (url == this.reqUrls.login) {
            HttpRequest.login(url, requestData, callbk);
        }
        else {
            HttpRequest.requestPort(url, type, requestData, callbk)
        }
    }

}