let mongoose = require('mongoose');

// crm schema
let LogbookSchema = mongoose.Schema({
    boat:{
        type: String
    },
    crew:{
        type: String
    },
    destination:{
        type: String
    },
    departure: {
        type: String
    },
    arrival: {
        type: String
    },
    status: {
        type: String
    },
    signin: {
        type: String
    },
    start: {
        type: String
    }
});

let Logbook = module.exports = mongoose.model('Logbook',LogbookSchema);
