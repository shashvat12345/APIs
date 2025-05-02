const mongoose = require('mongoose'); 
 
const orderSchema = new mongoose.Schema({ 
    productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' }, 
    categoryId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Category' }, 
    quantity: { type: Number, required: true }, 
    orderDate: { type: Date, default: Date.now }, 
    status: { type: String, default: 'Pending' }, 
}); 
 
const Order = mongoose.model('Order', orderSchema); 
module.exports = Order; 