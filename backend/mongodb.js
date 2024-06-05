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
const ButtonSchema = new mongoose.Schema({
    orderType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const TextboxSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    companyName: { type: String },
    streetAddress: { type: String },
    zipCode: { type: String },
    city: { type: String },
    phone: { type: String },
    email: { type: String },
    additionalInfo: { type: String },
    country: { type: String },
    province: { type: String }
});

const UserModel = mongoose.model('User', userSchema);
const ContactModel = mongoose.model('contacts', contactSchema);
const ButtonModel = mongoose.model('Button', ButtonSchema);
const TextboxModel = mongoose.model('Textbox', TextboxSchema);

module.exports = { UserModel, ContactModel, ButtonModel, TextboxModel };
