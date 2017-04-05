let mongoose = require('mongoose');

let adSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    discription: {
        type: String
    },
    price: {
        type: String,
        required: 'Price is Required'
    }
});

module.exports = mongoose.model('Ads', adSchema);