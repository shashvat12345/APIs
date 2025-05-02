const express = require('express'); 
const router = express.Router(); 
const deliveryController = require('../controllers/deliveryController'); 
 
// Define delivery routes 
router.post('/delivery-options', deliveryController.createDeliveryOption); 
router.get('/delivery-options', deliveryController.getDeliveryOptions); 
router.put('/delivery-options/:id', deliveryController.updateDeliveryOption); 
router.delete('/delivery-options/:id', deliveryController.deleteDeliveryOption); 
 
module.exports = router; 