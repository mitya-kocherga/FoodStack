const express = require('express');
const router = express.Router();

const controller = require('../controllers/ordersController');

router.get('/', controller.getAllOrders);

router.post('/add-order', controller.addOrder);

router.delete('/remove-order', controller.deleteOrder);

router.put('/update-order', controller.updateOrder)

module.exports = router;
