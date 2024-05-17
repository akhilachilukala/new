const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create booking
router.post('/bookings', async (req, res) => {
    try {
        const { user, service, date } = req.body;
        const booking = new Booking({ user, service, date });
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Cancel booking
router.put('/:id/cancel', async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, { status: 'cancelled' }, { new: true });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
