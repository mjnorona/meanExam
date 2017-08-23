var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var OptionSchema = new mongoose.Schema({
    _poll: {type: Schema.Types.ObjectId, ref: 'Poll'},
    content: String,
    votes: {type: Number, default: 0}
}, {timestamps: true})

var Option = mongoose.model('Option', OptionSchema)