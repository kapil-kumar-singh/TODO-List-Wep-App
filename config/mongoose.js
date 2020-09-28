const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list_database');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to mongodb'));
db.once('open', function(){
    console.log('Connected to the database :: mongoDB');
});

module.exports = db;