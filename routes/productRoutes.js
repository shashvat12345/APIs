const express = require('express'); 
const router = express.Router(); 
const productController = require('../controllers/productController'); 
 
// Define product routes 
router.post('/products', productController.createProduct); 
router.get('/products', productController.getProducts); 
router.put('/products/:id', productController.updateProduct); 
router.delete('/products/:id', productController.deleteProduct); 
 
module.exports = router; 