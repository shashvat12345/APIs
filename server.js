const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const path = require('path'); 
const routes = require('./routes/index'); // Import routes 
 
const app = express(); 
const PORT = process.env.PORT || 3000; // Use port 3000 instead of 5000 
 
// Middleware 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory 
app.use('/', routes); // Use routes 
 
// Start the server 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});