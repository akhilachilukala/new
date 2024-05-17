import React, { useState } from 'react';
import axios from 'axios';

function BookService() {
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const bookingData = { service, date, time };
            const res = await axios.post('http://localhost:8000/api/bookings', bookingData);
            console.log('Booking successful:', res.data);
            alert('Booking successful!');
        } catch (err) {
            console.error('Booking failed:', err);
            alert('Booking failed.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book a Service</h2>
            <label>
                Choose a service:
                <select value={service} onChange={e => setService(e.target.value)} required>
                    <option value="">Select a service</option>
                    <option value="consultation">Consultation</option>
                    <option value="repair">Repair</option>
                    <option value="installation">Installation</option>
                </select>
            </label>
            <label>
                Date:
                <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
            </label>
            <label>
                Time:
                <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
            </label>
            <button type="submit">Book Now</button>
        </form>
    );
}

export default BookService;
