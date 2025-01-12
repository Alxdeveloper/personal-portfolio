const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database/database'); // Path to your database setup
const adminRoutes = require('./routes/adminRoutes'); // Path to the admin routes file

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // Body parsing middleware
app.use(cors()); // Enable CORS

// Routes
app.use('/admin', adminRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
