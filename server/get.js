const express = require('express');
const router = express.Router();
const Product = require('./Product');

router.get('/get-products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to retrieve products:', error);
    res.status(500).json({ message: 'Failed to retrieve products' });
  }
});

module.exports = router;
