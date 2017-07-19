const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send("route match with simple GET request")
});

app.get('/xyz', function (req, res) {
    res.send("route match with xyz")
});

// match with abcd, aabcd, abbcd and aabbcd
app.get('/a+b+cd', function (req, res) {
    res.send("route match with a+b+cd")
});

// match with abcd, a{any}b{any}c{any}d
app.get('/a*b*c*d', function (req, res) {
    res.send("route match with ab*cd")
});

// match with cd ,acd, bcd and abcd
app.get('/a?b?cd', function (req, res) {
    res.send("route match with a?b?cd")
});


/*
// match with {any}et
app.get('*et', function (req, res) {
    res.send("route match with last et with *")
});
*/

// match with {any}et
app.get(/.*et$/, function (req, res) {
    res.send("route match with last et")
});

// match with {any}et
app.get('/et*', function (req, res) {
    res.send("route match with start et")
});

// create json object of cities
app.get('/cities/:city/:pincode', function (req, res) {
    res.send(req.params);
});

// chain routing
app.route('/chaining')
    .get(function (req, res) {
        res.send("send get response from chaining");
    })
    .post(function (req, res) {
        res.send("send post response from chaining");
    })
    .put(function (req, res) {
        res.send("send put response from chaining");
    })
    .delete(function (req, res) {
        res.send("send delete response from chaining")
    });

// start server on port
app.listen(3000, function () {
    console.log("server start on port 3000")
});