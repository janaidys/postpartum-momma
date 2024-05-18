const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema ({
    
    author: {
        type: String
    }, 
    comment: {
        type: String
    }, 
    timestamp: {
        type: Date
    },
});

const Post = mongoose.model(Comments, commentsSchema);

module.exports = Comments;