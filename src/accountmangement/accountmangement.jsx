import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./accountmangement.css";

// Define an array of FAQ data
const faqData = [
    {
        id: 'faq1',
        question: 'How do I reset my password?',
        answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions sent to your registered email address.'
    },
    {
        id: 'faq2',
        question: 'How can I update my email address?',
        answer: 'To update your email address, please visit the profile settings page and follow the prompts to update your contact details.'
    },
    {
        id: 'faq3',
        question: 'What should I do if my account is locked?',
        answer: 'If your account is locked due to multiple unsuccessful login attempts, please wait 30 minutes before trying again or contact support for immediate assistance.'
    },
    {
        id: 'faq4',
        question: 'How do I subscribe to or unsubscribe from newsletters?',
        answer: 'You can manage your newsletter subscriptions from your account settings page under the "Email Preferences" section.'
    },
    {
        id: 'faq5',
        question: 'How can I delete my account permanently?',
        answer: 'To delete your account permanently, please visit the account deletion page linked from your profile settings. Note that this action is irreversible.'
    },
    {
        id: 'faq6',
        question: 'Can I change my username?',
        answer: 'Username changes are typically restricted, but if you have a legitimate reason, please contact customer service for assistance.'
    },
    {
        id: 'faq7',
        question: 'How do I report suspicious activity?',
        answer: 'If you notice suspicious activity on your account, report it immediately through the security settings page or contact our support team directly.'
    },
    {
        id: 'faq8',
        question: 'What are the password requirements?',
        answer: 'Passwords must be at least 8 characters long, include both upper and lower case characters, and contain at least one number and one special character.'
    },
];

function AccountManagement() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (faqId) => {
        if (openFAQ === faqId) {
            setOpenFAQ(null);
        } else {
            setOpenFAQ(faqId);
        }
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
            <h1>AccountMangement</h1>
            <div className="faq-container">
                {faqData.map(faq => (
                    <div className="faq" key={faq.id}>
                        <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                            {faq.question}
                        </div>
                        {openFAQ === faq.id && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccountManagement;
