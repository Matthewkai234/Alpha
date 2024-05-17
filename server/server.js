const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mohammaddb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  availableQuantity: Number,
  price: Number,
  productDate: Date,
  imageURL: String,
});

const Product = mongoose.model('Product', productSchema);


app.post('/api/add-product', async (req, res) => {
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


app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
