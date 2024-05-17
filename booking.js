const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    service: String,
    date: Date,
    time: String
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
