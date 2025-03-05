const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: 'default.jpg,default.png,default.jpeg,default.gif'
    },
    posts: {
        type: Array,
        ref: 'Tweet',
        default: []

    }},{
    timestamps:true
    
});

const user = mongoose.model('user',userSchema);

module.exports = user;