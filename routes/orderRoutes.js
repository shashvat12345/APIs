const express = require('express'); 
const router = express.Router(); 
const orderController = require('../controllers/orderController'); 
 
// Define order routes 
router.post('/orders', orderController.createOrder); 
router.get('/orders', orderController.getOrders); 
router.put('/orders/:id', orderController.updateOrder); 
router.delete('/orders/:id', orderController.deleteOrder); 
 
module.exports = router; 