const express = require("express")
const bcrypt = require("bcrypt")
const UserModel = require("./mongodb")
const cors = require('cors');

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
            return res.status(400).send("wrong email or passswod");//".=.User already exists!"
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

        // Cheeck password
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

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
