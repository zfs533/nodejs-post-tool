



var request = require('request');
var url = "https://supersignhub.com/admin/login";
var requestData = { loginName: "addadd", password: "123456" };
httprequest(url, requestData);
var tk = ""
function httprequest(url, data, token) {
    if (token) {
        request({
            url: url, method: "GET", json: true,
            headers: {
                "content-type": "application/json;charset=UTF-8",
                "authorization": token,
            },
            body: requestData
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(JSON.stringify(body)) // 请求成功的处理逻辑
            }
        });
    }
    else {
        request({
            url: url, method: "POST", json: true,
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: requestData
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // 请求成功的处理逻辑
                tk = body.msg.token;
            }
        });
    }
};

setTimeout(() => {
    // httprequest("https://supersignhub.com/admin/allapp", { userName: "zq2_test", startTime: 1, endTime: 1578095999000000 }, tk);
    httprequest("https://supersignhub.com/ipa/getAct?page=1&count=20", {}, tk);
}, 2000);







