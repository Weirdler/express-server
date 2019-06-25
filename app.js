// call package and storing it
const express = require('express');

// call express and storing it
const app = express();

// routing traffic to home and giving a response
app.get('/', function(request, response){
    response.send("Landing safe")
});

// rerouting traffic to /prisonshower and sending a response
app.get('/prisonshower', function(request, response){
    response.send("don't drop any soap;)")
});

// app is listening on port 3000 
app.listen(3000);

// server start up message
console.log("you have the big gay of 3000...")