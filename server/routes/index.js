var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { title: 'This is my React App' });
});

module.exports = router;
