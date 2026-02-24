const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: Array,
    totalAmount: Number,
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.models.order || mongoose.model('order', orderSchema);