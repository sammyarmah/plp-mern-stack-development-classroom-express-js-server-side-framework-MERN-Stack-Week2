const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const validateProduct = require('../middleware/validation');
const { v4: uuidv4 } = require('uuid');


// Fetching all products 
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetching all products by Id
router.get("/:id", async (req, res) => {
  try {
    const products = await Product.findById(
      req.params.id
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Creating a new product 
router.post("/", validateProduct, async (req, res) => {
  const { name, description, price, category, inStock } = req.body;

  try {
    const products = new Product({ id: uuidv4(), name, description, price, category, inStock })
    const savedProduct = await products.save();
    res.status(201).json(savedProduct);

  } catch (error) {
    res.status(400).json({ message: error.message});
  }
});

// Updating a product by Id
router.put("/:id", validateProduct, async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
});

// Deleting a product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(
      req.params.id
    );
    res.json({ message: "Product deleted successfully..."});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Route for getting product statistics
router.get('/stats', async (req, res, next) => {
  try {
    // fetching all products from MongoDB
    const products = await Product.find();

    // Grouping them by category
    const stats = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    res.json(stats);
  } catch (error) {
    next(error);
  }
});

module.exports = router;



