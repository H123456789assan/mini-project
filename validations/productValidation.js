exports.validateProduct = (req, res, next) => {
    const { name, price, description } = req.body;

    if (!name || name.trim().length < 3) {
        return res.status(400).render('admin/addProduct', {
            error: "Product name must be at least 3 characters"
        });
    }

    if (!price || isNaN(price) || price <= 0) {
        return res.status(400).render('admin/addProduct', {
            error: "Price must be a valid positive number"
        });
    }

    if (!description || description.trim().length < 10) {
        return res.status(400).render('admin/addProduct', {
            error: "Description must be at least 10 characters"
        });
    }

    next();
};