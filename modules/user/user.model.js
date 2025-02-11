const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    username: String,
    password: String,
    date: {type: Date, Default : Date.now},
})
const user = mongoose.model('User', userSchema);
module.exports = user 
