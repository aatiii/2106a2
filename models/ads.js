let mongoose = require('mongoose');

let adSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    description: {
        type: String
    },
    price: {
        type: String,
        required: 'Price is Required'
    }
});

module.exports = mongoose.model('Ads', adSchema);