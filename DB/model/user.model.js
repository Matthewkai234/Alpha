import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        min: 4,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },    
    phone: {
        type: String,
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: 'Active',
        enum: ['Active', 'Inactive'] // Note: Fixed the capitalization consistency
    },
    role: {
        type: String,
        default: 'User',
        enum: ['User', 'Admin']
    }
}, {
    timestamps: true,
});

const UserModel = model('User', userSchema);
export default UserModel;
