// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust the path based on your structure

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", userId: user._id });
});

module.exports = router;
