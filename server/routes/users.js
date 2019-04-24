const express = require('express');
const Router = express.Router();

const Controller = require('../controllers/usersController');

Router.get('/', Controller.all_users);

Router.post('/add-user', Controller.add_user);

Router.post('/login-user', Controller.login);

Router.delete('/remove-user', Controller.delete_user);

module.exports = Router;