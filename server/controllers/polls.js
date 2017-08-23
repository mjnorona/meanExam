var mongoose = require('mongoose')
var Poll = mongoose.model('Poll')
var Option = mongoose.model('Option')

module.exports = {
    show: function(req,res){

        Poll.find({}, function(err,polls){
            res.json(polls)
        })
    },

    create: function(req,res){
        //modify 
        console.log("data", req.body.data.question)
        console.log("user", req.body.user)
        var poll = new Poll({question: req.body.data.question})
        poll.save(function(err, poll){
            if (err){
                console.log('something went wrong')
            } else {
                console.log('successfully made poll', poll)
            }
        })

        console.log("here we go:", poll._id)

        var option1 = new Option({content: req.body.data.option1})
        option1._poll = poll._id;
        option1.save(function(err){
            poll.options.push(option1);
            poll.save(function(err){
                if (err) {
                    console.log('Error')
                } else {
                    var option2 = new Option({content: req.body.data.option2})
                    option2._poll = poll._id;
                    option2.save(function(err){
                        poll.options.push(option2);
                        poll.save(function(err){
                            if (err) {
                                console.log('Error')
                            } else {
                                var option3 = new Option({content: req.body.data.option3})
                                option3._poll = poll._id;
                                option3.save(function(err){
                                    poll.options.push(option3);
                                    poll.save(function(err){
                                        if (err) {
                                            console.log('Error')
                                        } else {
                                            var option4 = new Option({content: req.body.data.option4})
                                            option4._poll = poll._id;
                                            option4.save(function(err){
                                                poll.options.push(option4);
                                                poll.save(function(err){
                                                    if (err) {
                                                        console.log('Error')
                                                    } else {
                                                        console.log("successfully added option")
                                                    }
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    })
                }
            })
        })

        


        
    },

    findSpecific: function(req,res){
        console.log('the id of the poll', req.params.id)
        Poll.findOne({_id: req.params.id})
        .populate('options')
        .exec(function(err, post){
            res.json(post)
        })
    },

    delete: function(req,res){
        console.log('deleted poll', req.body.id)
        Poll.remove({_id: req.body.id}, function(err){
            if (err){
                console.log('something went wrong')
            } else {
                console.log('success')
            }
        })
    }
}