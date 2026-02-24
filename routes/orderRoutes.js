const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authmiddleware');


// ======================
// ORDER ROUTES
// ======================

// Create Order
router.post('/orders',
    authMiddleware,
    orderController.createOrder
);

// View User Orders
router.get('/orders',
    authMiddleware,
    orderController.getUserOrders
);

module.exports = router;