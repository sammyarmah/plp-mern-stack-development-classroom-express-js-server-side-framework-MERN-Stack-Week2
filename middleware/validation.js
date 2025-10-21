// validation middleware for the product creation and update routes

function validateProduct(req, res, next) {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || !price || !category || typeof inStock === 'undefined') {
    return res.status(400).json({ message: 'All product fields are required' });
  }

  if (typeof price !== 'number') {
    return res.status(400).json({ message: 'Price must be a number' });
  }

  next();
}

module.exports = validateProduct;
