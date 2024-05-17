const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  availableQuantity: { type: Number, required: true },
  price: { type: Number, required: true },
  productDate: { type: Date, required: true },
  imageURL: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
