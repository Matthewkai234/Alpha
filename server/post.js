const express = require('express');
const router = express.Router();
const Product = require('./Product');

router.post('/add-product', async (req, res) => {
  try {
    const { productName, description, availableQuantity, price, productDate, imageURL } = req.body;
    const newProduct = new Product({ productName, description, availableQuantity, price, productDate, imageURL });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Failed to add product:', error);
    res.status(500).json({ message: 'Failed to add product' });
  }
});

module.exports = router;
