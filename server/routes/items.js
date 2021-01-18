var express = require('express');
var router = express.Router();

var items_controller = require('../controllers/itemsController');

// Add new item to list
router.post('/add',items_controller.create);

// Find all items in list
router.get('/', items_controller.findAll);

// Update existing list item by id
router.put('/:id',items_controller.update);

// Delete a list item by id
router.delete('/:id',items_controller.deleteItem);

module.exports = router;