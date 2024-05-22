const express = require('express');
const mongoose = require('mongoose');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the schema for form data
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
  province: String,
});

// Create a model for form data
const FormData = mongoose.model('FormData', formDataSchema);

// Use JSON middleware to parse JSON bodies
app.use(express.json());

// Route to handle form data submission
app.post('/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).send('Form data successfully saved');
  } catch (err) {
    res.status(400).send('Error saving form data: ' + err.message);
  }
});

// Route to retrieve all form data
app.get('/get-form-data', async (req, res) => {
  try {
    const formDataList = await FormData.find();
    res.status(200).json(formDataList);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

// Route to retrieve form data by ID
app.get('/get-form-data/:id', async (req, res) => {
  try {
    const formData = await FormData.findById(req.params.id);
    if (!formData) {
      return res.status(404).send('Form data not found');
    }
    res.status(200).json(formData);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

// Route to update form data by ID
app.put('/update-form-data/:id', async (req, res) => {
  try {
    const updatedFormData = await FormData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFormData) {
      return res.status(404).send('Form data not found');
    }
    res.status(200).json(updatedFormData);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

// Route to delete form data by ID
app.delete('/delete-form-data/:id', async (req, res) => {
  try {
    const deletedFormData = await FormData.findByIdAndDelete(req.params.id);
    if (!deletedFormData) {
      return res.status(404).send('Form data not found');
    }
    res.status(200).send('Form data successfully deleted');
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
