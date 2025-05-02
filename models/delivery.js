const mongoose = require('mongoose'); 
 
const deliverySchema = new mongoose.Schema({ 
    method: { type: String, required: true }, 
    cost: { type: Number, required: true }, 
    estimatedDeliveryTime: { type: String, required: true }, // e.g., "2-3 days" 
}); 
 
const Delivery = mongoose.model('Delivery', deliverySchema); 
module.exports = Delivery; 