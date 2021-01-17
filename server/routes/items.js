var express = require('express');
var router = express.Router();

var items_controller = require('../controllers/itemsController');

router.get('/', items_controller.getItemsList);

module.exports = router;