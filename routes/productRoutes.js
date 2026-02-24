const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


// ======================
// USER PRODUCT ROUTES
// ======================

// View all products
router.get('/products', productController.getAllProducts);

exports.createProduct = async (req, res, next) => {
    try {
        const { name, price, description } = req.body;

        await Product.create({
            name,
            price,
            description,
            image: `uploads/${req.file.filename}`
        });

        res.redirect('/admin/dashboard');

    } catch (error) {
        next(error);
    }
};

module.exports = router;