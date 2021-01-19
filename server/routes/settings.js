var express = require('express');
var router = express.Router();

var list_settings_controller = require('../controllers/listSettingsController');

// Create new list settings
router.post('/',list_settings_controller.create);

// Retrieve list settings
router.get('/', list_settings_controller.get);

// Update list settings
router.put('/',list_settings_controller.update);

// Clear list settings
router.delete('/',list_settings_controller.clear);

module.exports = router;