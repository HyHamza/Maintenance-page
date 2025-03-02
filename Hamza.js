// Import required modules
const express = require('express');
const path = require('path');

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));



// Create a route to handle all GET requests
app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname,  'public', 'maintenance.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});