/**
 * Created by Echo on 2015/11/11.
 */

var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

var fs = require("fs");

var data = fs.readFileSync('chatDemo/chat.html');

console.log(data.toString());
console.log("程序执行结束!");

var data2 = fs.readFile('chatDemo/chat.html', function(err, data){
    if(!err) console.log(data.toString());
});


console.log("程序执行结束第二次异步回调!");