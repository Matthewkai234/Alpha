const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mohammaddb'; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

module.exports = mongoose;
