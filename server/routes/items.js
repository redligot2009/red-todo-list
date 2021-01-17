var express = require('express');
var router = express.Router();

var items_controller = require('../controllers/itemsController');

// Find all items in list
router.get('/', items_controller.findAll);

// Add new item to list
router.post('/add',items_controller.create);

module.exports = router;