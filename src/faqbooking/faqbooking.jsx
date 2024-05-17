import React, { useState } from 'react';
import "./faqbooking.css";
import { Link } from 'react-router-dom';

// Sample FAQ data for booking

const faqData = [
    {
        1: "How do I make a booking?",
        answer: "To make a booking, simply navigate to our 'Book Now' section, choose your desired service, and follow the prompts to select dates and enter your information."
    },
    {
        question: "Can I change my booking dates after confirmation?",
        answer: "Yes, you can change your booking dates subject to availability. Changes can be made up to 48 hours before your scheduled booking."
    },
    {
        question: "What happens if I need to cancel my booking?",
        answer: "You can cancel your booking through our website. If you cancel more than 24 hours before your booking date, a full refund will be issued."
    },
    {
        question: "Are there any fees for modifying or cancelling a booking?",
        answer: "There are no fees for modifying your booking. However, cancellations made less than 24 hours before the scheduled booking may incur a fee."
    },
    {
        question: "How can I add special requests to my booking?",
        answer: "Special requests can be added during the booking process in the designated field. We will do our best to accommodate your needs."
    },
    {
        question: "What should I do if I don’t receive a confirmation email after booking?",
        answer: "If you don't receive a confirmation email, please check your spam folder. If it's not there, contact our customer support for further assistance."
    },
    {
        question: "Can I book on behalf of someone else?",
        answer: "Yes, you can make bookings on behalf of someone else. Just make sure to enter their details when filling out the booking form."
    },
    {
        question: "Is it possible to book multiple services at once?",
        answer: "Yes, our platform allows you to book multiple services in a single transaction for your convenience."
    },
    {
        question: "How do I find out more about the specifics of a service offered?",
        answer: "Detailed information about each service can be found on the service’s individual page on our website."
    },
    {
        question: "What are the payment options for online bookings?",
        answer: "We accept various forms of payment including credit cards, debit cards, and online payment platforms like PayPal."
    }
];


const BookingFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
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
            <h1>Booking Information</h1>
            {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        {faq.question}
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer" style={{ display: 'block' }}>
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};



export default BookingFAQ;
