//requiring express
const express = require('express');

//firing up express
const app = express();

//setting up the port
const port = 9000;

//requiring configuration for setting up the database to be accessed by mongoose
const db = require('./config/mongoose');

//turning on urlencoding to encode/decode the requests
app.use(express.urlencoded());

// use express router
app.use('/', require('./routes/index'));

//for using static files
app.use(express.static('./assets'));

// set up the view engine
app.set('view engine', 'ejs');
app.set("views", "./views");

//creating a listener to the specified port
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`server is running on the port : ${port}`);
})