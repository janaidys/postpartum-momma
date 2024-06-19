const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    post_id: {
        type:Number,
    },
    banner: {
        type: String,
    },
    title: { 
        type: String
    },
    article: {
        type: String,  
    },
    upload: {
        type: String,
    }
}) 

const Post = mongoose.model('Post', postSchema);
module.exports =Post;