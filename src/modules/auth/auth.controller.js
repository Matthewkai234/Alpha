import UserModel from "../../../DB/model/user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { userName, email, password,role } = req.body;

    const user = await UserModel.findOne({ email });
    if (user) {
        return res.status(409).json({ message: "User already exists" });
    }

    // Using bcrypt to hash the password asynchronously and safely
            const createUser = await UserModel.create({
                userName,
                email,
                password,
                role 
            });
            return res.status(201).json({ message: "success", user: createUser });
};

export const login=async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if(user.status=="Inactive"){
        return res.status(400).json({message:"Your account is blocked"});
    }
    if(password!==user.password){
        return res.status(401).json({message:"Invalid password"});
    }
    const token=jwt.sign({_id:user._id,role:user.role,status:user.status},process.env.LOGINSIG);
    return res.status(200).json({ message:"success",token});

}