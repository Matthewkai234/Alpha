const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3005;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);


const cartSchema = new mongoose.Schema({
  productid: String,
  content: String
});

const Cart = mongoose.model('Cart', cartSchema);


app.post('/addproduct', async (req, res) => {
  try {
    const { title, description, price, image } = req.body;
    const newProduct = new Product({ title, description, price, image });
    await newProduct.save();
    res.json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});


app.post('/addcart', async (req, res) => {
  try {
    const { productid, content } = req.body;
    const newCartItem = new Cart({ productid, content });
    await newCartItem.save();
    res.json({ message: "Item added to cart successfully", cartItem: newCartItem });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});


app.get('/display/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Cart.findOne({ _id: id });
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});


app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});