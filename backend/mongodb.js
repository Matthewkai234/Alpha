const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jihadesh14:05pNRzeZKFoWkI8u@cluster0.77zo9c7.mongodb.net/')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true }
}, { timestamps: true });

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
});

const UserModel = mongoose.model('User', userSchema);
const ContactModel = mongoose.model('contacts', contactSchema);

module.exports = { UserModel, ContactModel };
