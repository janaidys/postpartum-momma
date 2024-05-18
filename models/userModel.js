const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: { 
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Buffer
    },
    salt: {
        type: Buffer
    },
    strategy: {
        type: String,
        required: true
    }
}) 

const User = mongoose.model('User', userSchema);
module.exports = User;