const express = require('express');
const Router = express.Router();

const controller = require('../controllers/usersController');

Router.get('/', controller.getAllUsers);

Router.post('/add-user', controller.addUser);

Router.post('/login-user', controller.login);

Router.delete('/remove-user', controller.deleteUser);

module.exports = Router;