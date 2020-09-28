const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
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
        get: value => value.toDateString()

    }
});

const TaskSchema = mongoose.model('TaskSchema', taskSchema);

module.exports = TaskSchema;