const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { ContactModel } = require('../../mongodb');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'lobomotorsports14@gmail.com',
        pass: 'oivk ijxk uotv vcqm',
    }
});

router.post('/', async (req, res) => {
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

module.exports = router;
