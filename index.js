/**
 * Created by olaokenyi on 6/14/15.
 */

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var controller = require('./controllers');
var url = require('url');

var app = express();
var db = null;

var MONGO_DB_URL= 'mongodb://ikorovictor:prometheus1@ds031962.mongolab.com:31962/naijaodds';

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/days', function (req, res) {

    controller.getDays(db, req, res);
})

app.get('/games/:date', function (req, res) {

    controller.getGames(db,req.params.date, req, res)
})

app.get('/game/:id', function (req, res) {
    res.send('Hello World')
})

app.get('/games/search', function (req, res) {
    var query = url.parse(req.url);
    res.json(query);
    //controller.getSearchGames(db,query.q, req, res)

})

app.get('/game/:id/codes', function (req, res) {
    res.send('Hello World')
})

app.get('/games/:day/codes', function (req, res) {
    res.send('Hello World')
})



MongoClient.connect(MONGO_DB_URL, function(err, temp_db) {
    if(!err)
    {
        console.log("Connected correctly to DB");
        GLOBAL.db_conn_status = 1;
        db = temp_db;
        var port = process.env.PORT || 3000;
        app.listen(port)

    }
    else {
        GLOBAL.db_conn_status = 0;
        console.log('DB ERROR: ' +  err);
    }



});

