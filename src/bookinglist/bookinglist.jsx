import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function BookingList() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/bookings');
                setBookings(res.data);
            } catch (err) {
                console.error('Failed to fetch bookings:', err);
            }
        };
        fetchBookings();
    }, []);

    return (
        <div>
            <h2>My Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking._id}>
                        {booking.service} on {new Date(booking.date).toLocaleDateString()} at {booking.time}
                        {/* Add a cancel button and handle cancellation */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookingList;
