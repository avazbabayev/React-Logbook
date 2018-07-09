const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/logbook');

mongoose.Promise = require('bluebird');
let db = mongoose.connection;

//check connection
db.once('open', function(){
    console.log('connected to mongoDB');
});

// check for db errors
db.on('error', function(err){
    console.log(err);
});
module.exports = db;
