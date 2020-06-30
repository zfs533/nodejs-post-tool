let HttpMgr = require("./http/httpmgr");
let Download = require("./download");
// HttpMgr.init("https://supersignweb.com");//{ loginName: "addadd", password: "123456" }
// HttpMgr.init("http://192.168.1.119:8091");
HttpMgr.init("https://supersignclub.com");

(() => {
    let user = "t_test";
    let password = "123456";
    let type = 2;
    HttpMgr.startRequest("/admin/login", { loginName: user, password: password }, null, (data) => {
        switch (type) {
            case 0://切换账号任务
                HttpMgr.startRequest("/admin/changeActTask", {}, HttpMgr.GET, (data) => { console.log("finished") });
                break;
            case 1://更新关系表udid账号为最新账号
                HttpMgr.startRequest("/admin/updateReTask", {}, HttpMgr.GET, (data) => { console.log("finished") });
                break;
            case 2://指定账号给指定用户
                HttpMgr.startRequest("/admin/createByUser", { act: "m18646353406_50@163.com", user: "t_test" }, HttpMgr.POST, (data) => { console.log("finished") });
                break;
            case 3://触发数据同步statistic
                HttpMgr.startRequest("/admin/synchronizeData", {}, HttpMgr.GET, (data) => { console.log("finished") });
                break;
        }
    });
})()

// Download.downloadFile("http://192.168.1.119:8091/data/t_xiaoxiao_code.xlsx", "src/test.xlsx", () => {
//     console.log("finish");
// })



