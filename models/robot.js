var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Robot = new Schema ({
    type: String,
    description: String,
    special: String,
    madeOn: Date
});

module.exports = mongoose.model('Robot', Robot);