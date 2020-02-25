const express = require('express');
const router = express.Router();

const controller = require('../controllers/menusController');

router.get('/', controller.getMenu);

router.post('/add-menu', controller.addMenu);

router.delete('/remove-menu', controller.deleteMenu);

router.put('/update-menu', controller.updateMenu);

module.exports = router;