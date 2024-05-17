import React from 'react';
import "./faqcomponent.css";
import { Link } from 'react-router-dom';

// Sample FAQ data
const faqData = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including Visa, MasterCard, American Express, and PayPal."
    },
    {
        question: "Is it safe to use my credit card on your website?",
        answer: "Yes, transactions are encrypted with the latest security protocols to ensure that your details are secure."
    },
    {
        question: "Can I make a payment using my mobile phone?",
        answer: "Yes, our website is mobile-friendly, and you can make payments directly through your mobile browser or via our mobile app."
    },
    {
        question: "Do you offer payment plans or financing options?",
        answer: "Yes, we offer financing options and flexible payment plans for qualifying purchases. Please visit our financing page for more details."
    },
    {
        question: "How do I change my payment method after an order has been placed?",
        answer: "To change your payment method after placing an order, please contact our customer service department as soon as possible."
    },
    {
        question: "What should I do if I see a charge on my card that I did not authorize?",
        answer: "If you notice an unauthorized charge on your credit card, please contact us immediately. We also recommend contacting your credit card provider to report the incident."
    },
    {
        question: "Are there any hidden fees when making a payment?",
        answer: "No, we ensure transparency in all our transactions. All fees, if any, are clearly stated at the time of checkout."
    },
    {
        question: "How can I receive a receipt for my payment?",
        answer: "A receipt is sent automatically to your email address once your payment is processed. You can also access your payment history in your user account on our website."
    },
    {
        question: "Can I cancel a transaction after it has been processed?",
        answer: "Transactions that have been processed cannot typically be canceled. However, you can return the product if you are not satisfied. Please refer to our returns policy for more details."
    },
    {
        question: "How long do refunds take to process?",
        answer: "Refunds typically take 5-10 business days to process, depending on your bank or credit card issuer."
    }
];

const Faq = () => {
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
            <h1>Payment</h1>
            {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question">
                        {faq.question}
                    </div>
                    <div className="faq-answer">
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
