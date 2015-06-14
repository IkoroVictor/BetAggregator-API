/**
 * Created by olaokenyi on 6/14/15.
 */

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/days', function (req, res) {
    res.send('Hello World')
})

app.get('/games/:day', function (req, res) {
    res.send('Hello World')
})

app.get('/game/:id', function (req, res) {
    res.send('Hello World')
})

app.get('/games/search', function (req, res) {
    res.send('Hello World')
})

app.get('/game/:id/codes', function (req, res) {
    res.send('Hello World')
})

app.get('/games/:day/codes', function (req, res) {
    res.send('Hello World')
})



var port = process.env.PORT || 3000;

app.listen(port)