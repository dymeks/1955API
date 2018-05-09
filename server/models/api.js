require('../config/mongoose.js')();
const mongoose = require('mongoose');

module.exports = function(){
    var UserSchema = new mongoose.Schema({
        name: {type: String,required: true, minlength:2},   
    },{timestamps:true});

    // mongoose.model('User', UserSchema);
    User = mongoose.model('User',UserSchema);
}