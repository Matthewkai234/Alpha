

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/productsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  date: Date,
  image: String,
  carType: String,
  price: Number
});

const Product = mongoose.model('Product', productSchema);


app.post('/api/products', (req, res) => {
  const { name, description, quantity, date, image, carType, price } = req.body;
  const newProduct = new Product({
    name,
    description,
    quantity,
    date,
    image,
    carType,
    price
  });
  newProduct.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving product');
    } else {
      res.status(200).send('Product added successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
