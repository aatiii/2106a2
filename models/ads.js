let mongoose = require('mongoose');

let adSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    }
});

module.exports = mongoose.model('Ads', adSchema);