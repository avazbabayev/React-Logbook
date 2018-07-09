"use strict"
var http=require('http');
const express = require('express');
var request = require('request');
var fs = require('fs');
var multer = require('multer');
var bodyParser = require('body-parser');

// app Init
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var http = require('http').Server(app);

var Logbook = require('./models/Logbook');
var tripserver = require("./server/tripserver")(app)
var config = require("./server/config");
var path = require('path');
app.use(express.static('public'));
app.get('*',function (req ,res) {
       res.sendFile(path.resolve(__dirname,'public','index.html'))
})

app.listen(3000,function (req,res) {
    console.log("app is listening");
})
