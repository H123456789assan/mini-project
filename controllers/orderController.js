const Order = require('../models/Order');

exports.createOrder = async (req, res, next) => {
    try {
        const { products, totalPrice } = req.body;

        await Order.create({
            user: req.user.id,
            products,
            totalPrice
        });

        res.redirect('/orders');

    } catch (error) {
        next(error);
    }
};

exports.getUserOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.render('user/orders', { orders });
    } catch (error) {
        next(error);
    }
};