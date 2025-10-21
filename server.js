// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productsRoutes');
const dotenv = require('dotenv');


dotenv.config();
connectDB();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(express.json());
app.use(logger);
app.use(auth);

// Routes
app.use("/api/products", productRoutes);

// Error handler 
app.use(errorHandler);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 