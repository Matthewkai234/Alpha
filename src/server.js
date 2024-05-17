const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel, ContactModel } = require("./mongodb");
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express();
const port = 3005;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// Register logic
app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
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

// Login logic
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).send("Wrong Email Or Password!");
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(200).send("Logged in successfully!");
        } else {
            return res.status(400).send("Wrong Email Or Password!");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ Message: err.message });
    }
});

// Contact Us logic
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user:'lobomotorsports14@gmail.com',
        pass: 'oivk ijxk uotv vcqm',
    }
});

app.post('/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newMessage = new ContactModel({
            name,
            email,
            subject,
            message
        });

        await newMessage.save();

        let mailOptions = {
            from: email,
            to: 'lobomotorsports14@gmail.com',
            subject: "New Contact Message from Your Website",
            text: `You have received a new message from ${name} (${email}):\nSubject: ${subject}\nMessage: ${message}`,
            html: `<b>You have received a new message from ${name} (${email}):</b><br><b>Subject:</b> ${subject}<br><b>Message:</b> ${message}`
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            res.status(201).json({ message: "Message received and email sent successfully" });
        } catch (error) {
            console.error('Full error stack:', error);
            res.status(500).json({ message: "Email could not be sent. Error: " + error.toString() });
        }

        console.log("Contact message saved:", newMessage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});

