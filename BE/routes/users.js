const express = require('express');

const UsersRouter = express.Router();
const user_controller = require('../controllers/usersController');

UsersRouter.route('/').get(user_controller.all_users);

UsersRouter.route('/add-user').post(user_controller.add_user);

UsersRouter.route('/remove-user').delete(user_controller.delete_user);

module.exports = UsersRouter;