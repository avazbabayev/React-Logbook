module.exports = function (app) {
    var Logbook = require('../models/Logbook');
    var config = require("./config");
    app.post("/posttrip",function (req,res) {
        var trip = req.body;
        console.log(trip)
        Logbook.create(trip,function (err) {
            if (err) {
                console.log(err);
                return;
            } else {
                //req.flash('success', 'Product Add Success');
            }
        });
    })
    app.get("/tripdata",function (req,res) {
        Logbook.find({}, function (err, logbookdata){
            if(err){
                console.log(err);
            }else{
                res.json(logbookdata);
            }
        });
    })


}