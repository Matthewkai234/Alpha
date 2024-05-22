// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define MongoDB schema and model for orders
const orderSchema = new mongoose.Schema({
  orderType: String,
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// Enable JSON parsing for incoming requests
app.use(express.json());

// Route to handle placing an order
app.post('/place-order', async (req, res) => {
  try {
    const orderType = req.body.orderType;
    const order = new Order({ orderType });
    await order.save();
    res.status(201).send('Order placed successfully');
  } catch (err) {
    res.status(400).send('Failed to place order: ' + err.message);
  }
});

// Route to handle checking out
app.post('/check-out', async (req, res) => {
  // Add checkout logic here
  res.status(200).send('Check out completed successfully');
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
