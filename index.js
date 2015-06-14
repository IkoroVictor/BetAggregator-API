/**
 * Created by olaokenyi on 6/14/15.
 */

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})



var port = process.env.PORT || 3000;

app.listen(port)