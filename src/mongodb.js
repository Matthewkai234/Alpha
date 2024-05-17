const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jihades')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true }
}, { timestamps: true });


const ContactModel=mongoose.model('contacts',contactSchema);
const UserModel = mongoose.model('users', userSchema);
module.exports = {UserModel,ContactModel};

