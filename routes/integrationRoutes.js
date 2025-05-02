const express = require('express'); 
const router = express.Router(); 
const integrationController = require('../controllers/integrationController'); 
 
// Define integration route 
router.get('/unified-data', integrationController.getUnifiedData); 
 
module.exports = router; 