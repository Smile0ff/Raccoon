const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    amount: { type: Number },
    message: { type: String },
    createdAt: { type: Date }
});

orderSchema.pre('save', function(next){
    this.createdAt = Date.now();

    next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;