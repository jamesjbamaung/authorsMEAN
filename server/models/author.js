const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength:3,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        updated_at: Date.now,
    }
});

mongoose.model('Author', authorSchema);
var Author = mongoose.model('Author');
module.exports = Author;