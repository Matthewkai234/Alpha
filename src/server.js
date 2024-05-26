const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const  UserModel = require("./mongodb");
const nodemailer = require('nodemailer');
const cors = require('cors');
const crypto = require('crypto');
const contactRoutes = require('./Components/ContactUs/controllerContactus');

const secretKey = crypto.randomBytes(64).toString('hex');
const app = express();
const port = 3005;


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'lobomotorsports14@gmail.com',
        pass: 'oivk ijxk uotv vcqm',
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/contact', contactRoutes);


app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            email,
            username, 
            password: hashedPassword
        });
        await newUser.save();

        console.log("New user registered:", newUser);
        res.status(201).send("Registered Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send({ Message: err.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).send("Wrong Email Or Password!");
        }

        const isMatch = await bcrypt.compare(password, user.password);
     
        if (isMatch) {
            const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
            res.status(200).json({ token });
        } else {
            return res.status(400).send("Wrong Email Or Password!");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ Message: err.message });
    }
});

function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.get('/home', authenticateToken, (req, res) => {
    res.send('Welcome to the protected route, user: ' + req.user.userId);
});

app.post('/forget-password', async (req, res) => {
    try {
        const { email } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).send('User with this email does not exist');
        }

        const verificationCode = crypto.randomInt(100000,999999).toString();

        user.resetPasswordToken = verificationCode;
        user.resetPasswordExpires = Date.now() + 3600000;
        await user.save();

        const mailOptions = {
            from: 'lobomotorsports14@gmail.com',
            to: user.email,
            subject: 'Password Reset Verification Code',
            text: `You requested a password reset. Your verification code is: ${verificationCode}`,
            html: `<p>You requested a password reset. Your verification code is:</p><h2>${verificationCode}</h2>`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Password reset email sent');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});



app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
