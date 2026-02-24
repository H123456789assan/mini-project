const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const productController = require('../controllers/productController');

const authMiddleware = require('../middleware/authmiddleware');
const roleMiddleware = require('../middleware/rolemiddleware');
const { validateProduct } = require('../validations/productValidation');


// ======================
// ADMIN DASHBOARD
// ======================

router.get('/dashboard',
    authMiddleware,
    roleMiddleware('admin'),
    adminController.dashboard
);


// ======================
// PRODUCT MANAGEMENT
// ======================

// Show add product page
router.get('/products/add',
    authMiddleware,
    roleMiddleware('admin'),
    (req, res) => {
        res.render('admin/addProduct', { error: null });
    }
);

// Create product
const upload = require('../middleware/uploadMiddleware');

router.post('/products',
    authMiddleware,
    roleMiddleware('admin'),
    upload.single('image'),
    validateProduct,
    productController.createProduct
);
module.exports = router;
