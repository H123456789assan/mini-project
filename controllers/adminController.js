const Product = require("../models/product");
const Order = require("../models/order");
const User = require("../models/user");

exports.dashboard = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();

    res.render("admin/dashboard", {
      totalUsers,
      totalProducts,
      totalOrders,
    });
  } catch (error) {
    next(error);
  }
};
