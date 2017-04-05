let mongoose = require('mongoose');

// reference passport-local-mongoose to make this model usable for managing Users
let plm = require('passport-local-mongoose');
let findOrCreate = require('mongoose-findorcreate');

// create the model schema
let accountSchema = new mongoose.Schema({
    googleId: String
});

accountSchema.plugin(plm);
accountSchema.plugin(findOrCreate);

module.exports = mongoose.model('Account', accountSchema);