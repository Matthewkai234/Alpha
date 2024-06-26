const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Connection error handling
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`);
});

// Define order schema and model
const orderSchema = new mongoose.Schema({
  orderType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);
//new order
const newOrder = new Order({ orderType: 'online purchase' });
newOrder.save()
  .then(() => console.log('Order placed successfully'))
  .catch(err => console.error('Error placing order:', err));
  
//finding the order
Order.find({ orderType: 'online purchase' })
  .then(orders => console.log('Found orders:', orders))
  .catch(err => console.error('Error finding orders:', err));

//Updating an order
Order.updateOne({ _id: 'someOrderId' }, { orderType: 'in-store purchase' })
  .then(() => console.log('Order updated successfully'))
  .catch(err => console.error('Error updating order:', err));
//Deleting an order
Order.deleteOne({ _id: 'someOrderId' })
  .then(() => console.log('Order deleted successfully'))
  .catch(err => console.error('Error deleting order:', err));

// Middleware
app.use(express.json());

// Route to place an order
app.post('/place-order', async (req, res) => {
  try {
    const { orderType } = req.body;
    if (!orderType) {
      return res.status(400).send('Order type is required');
    }
    const newOrder = new Order({ orderType });
    await newOrder.save();
    res.status(201).send('Order placed successfully');
  } catch (err) {
    res.status(400).send('Error placing order: ' + err.message);
  }
});

// Route to handle checkout
app.post('/check-out', (req, res) => {
  res.status(200).send('Checkout completed successfully');
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
