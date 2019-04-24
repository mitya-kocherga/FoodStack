const express = require('express');

const OrdersRouter = express.Router();
const order_controller = require('../controllers/ordersController');

OrdersRouter.route('/').get(order_controller.all_orders);

OrdersRouter.route('/add-order').post(order_controller.post_order);

OrdersRouter.route('/remove-order').delete(order_controller.delete_order);

OrdersRouter.route('/')
    .put(order_controller.put_order)
    .patch(order_controller.patch_order)


module.exports = OrdersRouter;