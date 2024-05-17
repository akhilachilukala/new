import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./bookingcomponent.css";

export function BookingComponent() {
    const initialState = {
        service: '',
        date: '',
        time: '',
        creditCardNumber: ''
    };

    const [bookingData, setBookingData] = useState(initialState);
    const [bookingId, setBookingId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/bookings', bookingData)
            .then(response => {
                alert('Booking confirmed!');
                setBookingId(response.data.id);
                console.log('Server Response:', response.data);
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage('There was a problem with your booking. Please try again.');
                console.error('Error:', error);
            });
    };

    const handleCancel = (e) => {
        e.preventDefault();
        if (!bookingId) {
            alert("No booking to cancel!");
            return;
        }

        axios.delete(`http://localhost:8000/api/bookings/${bookingId}`)
            .then(() => {
                alert('Booking cancelled successfully.');
                setBookingId(null);
                setBookingData(initialState);
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage('Failed to cancel the booking. Please try again.');
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <header className="fixed-header">
                <div className="logo-nav-child">
                    <Link to="/home">Customer</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/bookings">Bookings</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/payment">FAQ Payment</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/faq">FAQ Bookings</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/helpcentre">Helpcenter</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/customersupport">Customer Support</Link>
                </div>
            </header>
            <h1>Booking Procedures</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form className="centered-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="service" >Choose a service:</label>
                    <select name="service" id="service" value={bookingData.service} onChange={handleChange} required>
                        <option value="">Select a service</option>
                        <option value="consultation">Consultation</option>
                        <option value="repair">Repair</option>
                        <option value="installation">Installation</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date" >Date:</label>
                    <input type="date" name="date" id="date" value={bookingData.date} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input type="time" name="time" id="time" value={bookingData.time} onChange={handleChange} required />
                </div>

                <button type="submit" style={{ width: '380px' }}>Book Now</button>
                <button type="button" style={{ width: '390px' }} onClick={handleCancel} disabled={!bookingId}> Cancel Booking
                </button>
            </form>
            <Link to="/feedback" className="feedback-link">Give Feedback</Link>

        </div>
    );
}
