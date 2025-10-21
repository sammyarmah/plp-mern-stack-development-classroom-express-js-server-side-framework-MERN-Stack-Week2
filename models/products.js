const mongoose = require('mongoose');

// Defining the schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, required: true }
});

// creating the model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;