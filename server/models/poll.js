var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var PollSchema = new mongoose.Schema({
    question: String,
    options: [{type: Schema.Types.ObjectId, ref: 'Option'}]
}, {timestamps: true})

var Poll = mongoose.model('Poll', PollSchema)