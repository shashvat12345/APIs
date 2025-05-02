const Product = require('../models/product'); 
const Category = require('../models/category'); 
const Order = require('../models/order'); 
const Delivery = require('../models/delivery'); 
 
// Get all data for the unified interface 
exports.getUnifiedData = async (req, res) => { 
    try { 
        console.log('Fetching unified data...'); // Log the start of the operation 
        const products = await Product.find(); 
        const categories = await Category.find(); 
        const orders = await Order.find().populate('productId categoryId'); 
        const deliveryOptions = await Delivery.find(); 
 
        res.status(200).send({ 
            products, 
            categories, 
            orders, 
            deliveryOptions 
        }); 
        console.log('Unified data fetched successfully'); // Log successful fetch 
    } catch (error) { 
        console.error('Error fetching unified data:', error); // Log error details 
        res.status(500).send({ error: 'Failed to fetch unified data' }); 
    } 
}; 