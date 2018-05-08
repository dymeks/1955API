const mongoose = require('mongoose');

module.exports = function(){
    var UserSchema = new mongoose.Schema({
        name: {type: String,required: true, minlength:2},
        quote: {type: String, required: true},
        created_at: {
            type:Date,
            default:Date.now
        }
    })
    mongoose.model('User', UserSchema);
    const User = mongoose.model('User');
}