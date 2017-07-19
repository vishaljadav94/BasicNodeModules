
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('css'));

app.use(express.static('html'));

app.use('/vishal', express.static(path.join(__dirname, 'images')));

app.listen(8080, function () {
    console.log("server start on port 8080");
})