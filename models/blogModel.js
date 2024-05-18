const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    bannerImage: {
        type: String,
    },
    title: { 
        type: String
    },
    article: {
        type: String,
        
    }
}) 

const User = mongoose.model('Post', postSchema);
module.exports = User;