const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    discription:{
        type: String,
        required: true
    },
    category: {
        type : String,
        required: true
    },
    date: {
        type : Date,
        required: true,
        // get: value => value.toDateString()

    }
});

const TodoSchema = mongoose.model('TodoSchema', todoSchema);

module.exports = TodoSchema;