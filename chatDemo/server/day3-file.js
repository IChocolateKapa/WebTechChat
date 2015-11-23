/**
 * Created by Echo on 2015/11/23.
 */
var fs = require("fs");

var data = fs.readFileSync('chatDemo/chat.html');

console.log(data.toString());
console.log("程序执行结束!");

var data2 = fs.readFile('chatDemo/chat.html', function(err, data){
    if(!err) console.log(data.toString());
});


console.log("程序执行结束第二次异步回调!");