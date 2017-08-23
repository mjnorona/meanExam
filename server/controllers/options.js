var mongoose = require('mongoose')
var Option = mongoose.model('Option')

module.exports = {
    vote: function(req,res){
        console.log(req.body.id)
        Option.findOne({_id: req.body.id}, function(err, option){
            option.votes++;
            option.save(function(err){
                if (err){
                    console.log('wrong')
                } else {
                    res.redirect('/')
                }
            })
            
        })
    }
}