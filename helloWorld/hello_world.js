
// import express module
const express = require("express");

// create app instanse of express module 
const app = express();

// get request
app.get('/hello', function (req, res) {
    res.send("hello world");
});

// post request
app.post('/post', function (req, res) {
    res.send("catch post request")
});

// delete request
app.delete('/delete', function (req, res) {
    res.send("catch delete request");
});


// put request
app.put('/put', function (req, res) {
    res.send("catch put request");

});

// create server
app.listen(3000, function () {
    console.log("create server on port 3000");
});