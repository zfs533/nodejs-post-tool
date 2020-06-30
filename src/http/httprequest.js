let request = require('request');
module.exports = {
    token: "",
    urlArr: ["https://supersignhub.com"],
    url: "",
    /**
     * 
     * @param {*} url 
     * @param {*} type 
     * @param {*} param 
     */
    async init(url) {
        this.url = url || this.urlArr[0];
    },
    async login(url, requestData, callbk) {
        url = this.url + url;
        console.log(url);
        request({
            url: url, method: "POST", json: true,
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: requestData
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log(body);
                this.token = body.msg.token;
                if (callbk) {
                    callbk(body);
                }
            }
        });
    },
    /**
     * 
     * @param {请求路径} url 
     * @param {请求方式 get post} type 
     * @param {请求参数} requestData 
     * @param {回调函数} callbk 
     */
    async requestPort(url, type, requestData, callbk) {
        url = this.url + url;
        console.log(url);
        request({
            url: url, method: type, json: true,
            headers: {
                "content-type": "application/json;charset=UTF-8",
                "authorization": this.token,
            },
            body: requestData
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log(body);
                if (callbk) {
                    callbk(body);
                }
            }
            else {
                console.log(response);
                console.log(response.statusCode);
            }
        });
    }

}