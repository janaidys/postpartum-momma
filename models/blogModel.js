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

const Post = mongoose.model('Post', postSchema);
module.exports =Post;