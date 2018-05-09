require('../models/api.js')();
// const mongoose = require('mongoose');
// var User = mongoose.model('User');
module.exports = {
    index:function(req,res){
        User.find({}, function(err, users) {
            console.log(users);
            res.json(users);    
        })
        console.log("I'm here!")
    },
    addName:function(req,res){
        console.log("I'm in addName here is my name: " + req.params.name);
        var user = new User({
            name:req.params.name,
        });
        user.save(function(err){
            console.log('I just finished saving!');
            if(err){
                console.log("something went wrong.");
                res.json({error:err});
            } else {
                console.log("successfully added a user!")
                res.json(user);
            }
        })
    },
    removeName:function(req,res){
        User.remove({name:req.params.name}, function(err){
            if(err)
            {
                res.json(err);
            }else {
                res.redirect('/');
            }    
        })
    },
    name: function(req,res){
        User.find({name:req.params.name}, function(err, users) {
            console.log(users);
            res.json(users);    
        })
    },
}