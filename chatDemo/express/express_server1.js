/**
 * Created by Echo on 2015/11/25.
 */

var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8992, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
