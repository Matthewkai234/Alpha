const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const orderSchema = new mongoose.Schema({
  orderType: String,
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

app.use(express.json());

app.post('/place-order', async (req, res) => {
  try {
    const { orderType } = req.body;
    const newOrder = new Order({ orderType });
    await newOrder.save();
    res.status(201).send('Order placed successfully');
  } catch (err) {
    res.status(400).send('Error placing order: ' + err.message);
  }
});

app.post('/check-out', async (req, res) => {
  res.status(200).send('Checkout completed successfully');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
