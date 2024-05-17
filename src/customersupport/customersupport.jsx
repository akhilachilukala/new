import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './customersupport.css';
import { Link } from 'react-router-dom';

// Establish socket connection
const socket = io("http://localhost:5000");

// CustomerSupport component
export function CustomerSupport() {
    // State variables
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

    // Effect hook to handle incoming messages
    useEffect(() => {
        socket.on('message', message => {
            setMessages(prevMessages => [...prevMessages, message]);
        });

        // Clean up socket connection
        return () => {
            socket.off('message');
            socket.disconnect();
        };
    }, []);

    // Function to send chat messages
    const sendMessage = event => {
        event.preventDefault();
        if (input) {
            socket.emit('sendMessage', input, () => setInput(''));
        }
    };

    // Function to handle email submission
    const handleSubmitEmail = async event => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message })
            });
            if (!response.ok) throw new Error('Something went wrong');
            const data = await response.json();
            console.log('Server response:', data);
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    // Function to handle phone call logging
    const handleLogPhoneCall = async event => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/log-phone-call', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone })
            });
            if (!response.ok) throw new Error('Something went wrong');
            const data = await response.json();
            console.log('Server response:', data);
            alert('Phone call logged successfully!');
        } catch (error) {
            console.error('Failed to log phone call:', error);
            alert('Failed to log phone call. Please try again later.');
        }
    };

    // JSX rendering
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


            <div className="chatContainer">
                <h2>Live Chat</h2>

                <p>Chat with a support agent in real-time. Type your message below and press "Send".</p>
                <p className="availability">Support agents are available 24/7.</p>

                {/* Chat history display */}
                <div className="chatHistory">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">{msg.text}</div>
                    ))}
                </div>

                {/* Chat input form */}
                <form onSubmit={sendMessage} className="chatForm">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message here" />
                    <button type="submit">Send</button>
                </form>



                {/* Email Us Section */}
                <div className="emailContainer">
                    <h2>Email Us</h2>
                    <p>Send us an email with your questions or concerns. Fill out the fields below and click "Send Email".</p>
                    <p>We typically respond to emails within 24 hours.</p>
                    <p>Your privacy is important to us. We will not share your email address with third parties.</p>
                    {/* Email form */}
                    <form onSubmit={handleSubmitEmail} className="emailForm">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" required></textarea>
                        <button type="submit">Send Email</button>
                    </form>
                </div>

                {/* Log a Phone Call Section */}
                <div className="callContainer">
                    <h2>Log a Phone Call</h2>
                    <p>Prefer to talk over the phone? Leave your phone number and we'll get back to you as soon as possible.</p>
                    <p>Our support team will contact you shortly after receiving your call request.</p>
                    <p>Your privacy is important to us. We will never share your phone number with third parties.</p>
                    <p>Contact us directly at: +1234567890 (24/7)</p>
                    {/* Phone call form */}
                    <form onSubmit={handleLogPhoneCall} className="phoneCallForm">
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" required />
                        <button type="submit">Log Call</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
