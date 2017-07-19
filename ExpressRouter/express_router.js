const express = require('express');
const router = require('./router')

const app = express();

app.use(router);

app.listen(3000, function () {
    console.log("server satrt on port 3000");
})
