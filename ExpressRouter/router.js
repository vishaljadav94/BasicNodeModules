const express = require('express');

const router = express.Router();

router.use(function timelog(req, res, next) {
    console.log("Request Time: ", Date());
    next();
});

router.get('/home', function (req, res) {
    res.send("show home page from router")
});

router.get('/about', function (req, res) {
    res.send("show about page from router")
});


router.post('/info', function (req, res) {
    res.send("show info page from router")
});

router.delete('/users', function (req, res) {
    res.send("show users page from router")
});

module.exports = router;
