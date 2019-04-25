const express = require('express');
const Router = express.Router();

const controller = require('../controllers/menusController');

Router.get('/', controller.allMenus);

Router.post('/add-menu', controller.addMenu);

Router.delete('/remove-menu', controller.deleteMenu);

Router.put('/update-menu', controller.updateMenu);

module.exports = Router;