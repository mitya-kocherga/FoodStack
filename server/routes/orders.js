const express = require('express');
const Router = express.Router();

const controller = require('../controllers/ordersController');

Router.get('/', controller.allOrders);

Router.post('/add-order', controller.addOrder);

Router.delete('/remove-order', controller.deleteOrder);

Router.route('/update-order').put(controller.updateOrder)



module.exports = Router;