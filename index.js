const express = require('express');
const app = express();
const port = 9000;

// use express router
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if (err){
        // console.log('Error in runnin the sever :', err)
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`server is running on the port : ${port}`);
})