var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('teams');
});

router.get('/csgo', function(req, res) {
    res.send('csgo');
});

router.get('/wow', function(req, res) {
    res.send('wow');
});

module.exports = router;