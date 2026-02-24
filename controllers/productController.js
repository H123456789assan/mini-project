const Product = require('../models/product');

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.render('user/products', { products });
    } catch (error) {
        next(error);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const { name, price, description } = req.body;

        await Product.create({
            name,
            price,
            description
        });

        res.redirect('/admin/products');

    } catch (error) {
        next(error);
    }
};