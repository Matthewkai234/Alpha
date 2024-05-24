import UserModel from "../../DB/model/user.model.js";
import jwt from 'jsonwebtoken';

export const auth = (accessrole=[]) => {
    return async (req, res, next) => {
        const { authorization } = req.headers;

        if (!authorization || !authorization.startsWith('noor__')) {
            return res.status(401).json({ message: "Unauthorized - No token provided." });
        }

        const token = authorization.split('noor__')[1];  // Correctly split to get the token part
        try {
            const decoded = jwt.verify(token, process.env.LOGINSIG);  // Use the correct environment variable for the JWT secret
            const user = await UserModel.findById(decoded._id).select('userName role');
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if(!accessrole.includes(user.role)) {
                return res.status(401).json({ message: "not auth user" });
            }
            req.user = user;
            return next();
        } catch (error) {
            // This catches any errors from jwt.verify, which throws an error on invalid token
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }
    }
}
