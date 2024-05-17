// Environment configuration
require('dotenv').config();

// External modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Stripe = require('stripe');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const http = require('http');
const bcrypt = require('bcrypt');
const socketIo = require('socket.io');
const { Server } = require('socket.io');
const Vonage = require('@vonage/server-sdk');
const twilio = require('twilio');

// Import models
const User = require('./user');
const Booking = require('./booking');
const FeedbackModel = require('./feedback');
const sendEmail = require('./sendemail');





// Twilio configuration

// Stripe configuration
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Express application setup
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5000",
        methods: ["GET", "POST"]
    }
});


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for email logs
const emailLogSchema = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
    sentAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['sent', 'failed'], default: 'sent' }
});

const EmailLog = mongoose.model('EmailLog', emailLogSchema);

// Handle email submission
app.post('/send-email', async (req, res) => {
    const { email, message } = req.body;

    try {
        // Send email code here...

        // Log the email
        const emailData = new EmailLog({ email, message });
        await emailData.save();

        res.json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
});


// Define a schema for phone call logs
const phoneCallSchema = new mongoose.Schema({
    phone: { type: String, required: true }
});

const PhoneCall = mongoose.model('PhoneCall', phoneCallSchema);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('sendMessage', (message) => {
        io.emit('message', { text: message });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



// Handle phone call logging
app.post('/log-phone-call', async (req, res) => {
    const { phone } = req.body;

    try {
        const phoneCallData = new PhoneCall({ phone });
        await phoneCallData.save();
        res.json({ message: 'Phone call logged successfully!' });
    } catch (error) {
        console.error('Failed to log phone call:', error);
        res.status(500).json({ error: 'Failed to log phone call. Please try again later.' });
    }
});







// Routes
app.get('/api/faqs', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch FAQs", error: error.message });
    }
});

app.post('/api/bookings', async (req, res) => {
    const { user, service, date, time } = req.body;
    try {
        const newBooking = new Booking({ user, service, date, time });
        const savedBooking = await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully', id: savedBooking._id });
    } catch (error) {
        res.status(400).json({ message: 'Error creating booking', error: error.message });
    }
});

app.delete('/api/bookings/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Booking.findByIdAndDelete(id);
        if (result) {
            res.status(200).json({ message: 'Booking cancelled successfully' });
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling booking', error: error.message });
    }
});

app.post('/api/feedback', async (req, res) => {
    const { user, feedbackText } = req.body;
    try {
        const feedback = new FeedbackModel({ user, feedbackText });
        const savedFeedback = await feedback.save();
        res.status(201).json({ message: "Feedback received successfully", data: savedFeedback });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.toString() });
    }
});



// User authentication routes
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered successfully');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});









app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
