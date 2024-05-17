const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({ user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ user, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
