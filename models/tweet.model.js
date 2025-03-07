const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    tweet:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    like:{
        type: [String],
        default: [],
    },
    profilePicture:{
        type: String,
        default: 'default.jpg,default.png,default.jpeg,default.gif'
    },
    comments:{
        comment:String,
        username:String,
        createdAt:Date,
    },
    postPicture:{
        type: String,
        default: 'default.jpg,default.png,default.jpeg,default.gif'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Tweet', tweetSchema);