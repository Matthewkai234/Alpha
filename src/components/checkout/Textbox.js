const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

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

// Handle MongoDB connection errors
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`);
});

// Define the schema for form data
const formDataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: String,
  streetAddress: String,
  zipCode: String,
  city: String,
  phone: String,
  email: { type: String, required: true, unique: true },
  additionalInfo: String,
  country: String,
  province: String,
}, { timestamps: true });

// Create a model for form data
const FormData = mongoose.model('FormData', formDataSchema);

// Use JSON middleware to parse JSON bodies
app.use(express.json());

// Route to handle form data submission
app.post('/submit-form', [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Invalid email address')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    const formData = new FormData(req.body);
    await formData.save(); // Saves the new form data to the database
    res.status(201).json({ message: 'Form data successfully saved', data: formData });
  } catch (err) {
    res.status(400).json({ error: 'Error saving form data', details: err.message });
  }
});

// Route to retrieve all form data
app.get('/get-form-data', async (req, res) => {
  try {
    const formDataList = await FormData.find(); // Retrieves all form data from the database
    res.status(200).json(formDataList);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Route to retrieve form data by ID
app.get('/get-form-data/:id', async (req, res) => {
  try {
    const formData = await FormData.findById(req.params.id); // Retrieves a single document by its ID
    if (!formData) {
      return res.status(404).json({ error: 'Form data not found' });
    }
    res.status(200).json(formData);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Route to update form data by ID
app.put('/update-form-data/:id', [
  body('firstName').optional().notEmpty().withMessage('First name is required'),
  body('lastName').optional().notEmpty().withMessage('Last name is required'),
  body('email').optional().isEmail().withMessage('Invalid email address')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    const updatedFormData = await FormData.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); // Updates the document in the database
    if (!updatedFormData) {
      return res.status(404).json({ error: 'Form data not found' });
    }
    res.status(200).json(updatedFormData);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Route to delete form data by ID
app.delete('/delete-form-data/:id', async (req, res) => {
  try {
    const deletedFormData = await FormData.findByIdAndDelete(req.params.id); // Deletes the document from the database
    if (!deletedFormData) {
      return res.status(404).json({ error: 'Form data not found' });
    }
    res.status(200).json({ message: 'Form data successfully deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
