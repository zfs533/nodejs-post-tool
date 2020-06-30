var request = require('request');
var fs = require('fs');

/* 下载文件 */
module.exports = {
    /**
     * 
     * @param {下载地址} url 
     * @param {保存文件路径和名字} filename 
     * @param {回调函数} callbk 
     */
    downloadFile: function (url, filename, callbk) {
        let stream = fs.createWriteStream(filename);
        request(url).pipe(stream).on('close', callbk);
    }
}