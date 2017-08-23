var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var polls = require('../controllers/polls.js')

var Option = mongoose.model('Option');
var options = require('../controllers/options.js')

module.exports = function(app){
    app.get('/polls', function(req,res){
        polls.show(req,res)
    })

    app.get('/pollData/:id', function(req,res){
        console.log('getting specific poll')
        polls.findSpecific(req,res)
    })

    app.post('/poll/create', function(req,res){
        console.log(req.body.data)
        polls.create(req,res)
    })

    app.post('/optionVote', function(req,res){
        console.log('option',req.body.id)
        options.vote(req,res)
    })

    app.post('/deletion', function(req,res){
        console.log('deletion', req.body.id)
        polls.delete(req,res)
    })

    app.post('/poll/delete/:id', function(req,res){

    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../public/dist/index.html"))
    });
}