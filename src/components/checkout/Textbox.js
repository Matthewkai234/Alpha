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

// Define the structure of form data in MongoDB
const formDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  streetAddress: String,
  zipCode: String,
  city: String,
  phone: String,
  email: String,
  additionalInfo: String,
  country: String,
  province: String
});

// Create a model for form data based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Enable JSON parsing for incoming requests
app.use(express.json());

// Handle POST requests to submit form data
app.post('/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).send('Form data saved successfully');
  } catch (err) {
    res.status(400).send('Failed to save form data: ' + err.message);
  }
});

// Handle GET requests to retrieve all form data
app.get('/get-form-data', async (req, res) => {
  try {
    const allFormData = await FormData.find();
    res.status(200).json(allFormData);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

// Handle GET requests to retrieve form data by ID
app.get('/get-form-data/:id', async (req, res) => {
  try {
    const formData = await FormData.findById(req.params.id);
    if (!formData) {
      return res.status(404).send('Form data not found');
    }
    res.status(200).json(formData);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

// Handle PUT requests to update form data by ID
app.put('/update-form-data/:id', async (req, res) => {
  try {
    const formData = await FormData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!formData) {
      return res.status(404).send('Form data not found');
    }
    res.status(200).json(formData);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

// Handle DELETE requests to delete form data by ID
app.delete('/delete-form-data/:id', async (req, res) => {
  try {
    const formData = await FormData.findByIdAndDelete(req.params.id);
    if (!formData) {
      return res.status(404).send('Form data not found');
    }
    res.status(200).send('Form data deleted successfully');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
