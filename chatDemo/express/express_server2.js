/**
 * Created by Echo on 2015/11/25.
 */
var express = require('express');
var app = express();
app.set('view engine', 'jade'); // 设置模板引擎
app.use(express.static('chatDemo'));
//app.set('views', __dirname);  // 设置模板相对路径(相对当前目录)
//  主页输出 "Hello World"
app.get('/', function (req, res) {
    //res.setEncoding('utf8');
    console.log("主页 GET 请求");
    res.send('Hello GET');
})


//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})

//  /del_user 页面响应
app.delete('/del_user', function (req, res) {
    //res.setEncoding('utf8');
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    //res.send('正则匹配');
    res.render(__dirname  + "/demo/day6_mixin",
        {
            name: "Echo",
            age: "24",
            'collegues': [
                {
                    'name': "liushaohua",
                    'gender': "male",
                    'age': '26'
                },
                {
                    'name': "wangsonglin",
                    'gender': "male",
                    'age': '28'
                },
                {
                    'name': "lishanzhi",
                    'gender': "female",
                    'age': '25'
                },
                {
                    'name': "gaicuisha",
                    'gender': "female",
                    'age': '26'
                }
        ]}
        );
});

/*

 {myProfile: {
 'nickname': "Echo",
 /*'collegues': [
 {
 'name': "liushaohua",
 'gender': "male",
 'age': '26'
 },
 {
 'name': "wangsonglin",
 'gender': "male",
 'age': '28'
 },
 {
 'name': "lishanzhi",
 'gender': "female",
 'age': '25'
 },
 {
 'name': "gaicuisha",
 'gender': "female",
 'age': '26'
 }
 ]
}}
*/

var server = app.listen(8993, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);

});