const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/jihades',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

s
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
