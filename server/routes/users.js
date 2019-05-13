const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController');

router.get('/', controller.getAllUsers);

router.get('/check-auth', controller.checkToken);

router.post('/add-user', controller.addUser);

router.post('/login-user', controller.login);

router.delete('/remove-user', controller.deleteUser);

router.put('/update-user', controller.updateUser);

module.exports = router;