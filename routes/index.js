const express = require('express'); 
const router = express.Router(); 
const productRoutes = require('./productRoutes'); // Import product routes 
const categoryRoutes = require('./categoryRoutes'); // Import category routes 
const orderRoutes = require('./orderRoutes'); // Import order routes 
const deliveryRoutes = require('./deliveryRoutes'); // Import delivery routes 
const integrationRoutes = require('./integrationRoutes'); // Import integration routes 
 
// Example route 
router.get('/', (req, res) => { 
    console.log('Received request for API Home'); // Log request 
    res.send('API Home'); 
}); 
 
// Use product, category, order, delivery, and integration routes 
router.use('/', productRoutes); 
router.use('/', categoryRoutes); 
router.use('/', orderRoutes); 
router.use('/', deliveryRoutes); // Use delivery routes 
router.use('/', integrationRoutes); // Use integration routes 
 
// Error handling for undefined routes 
router.use((req, res) => { 
    const errorMessage = 'Route not found'; 
    console.error(errorMessage); // Log error 
    res.status(404).send(errorMessage); 
}); 
 
module.exports = router;