import React, { useState } from 'react';

// Sample FAQ data for booking
const faqData = [
    { question: "How do I make a booking?", answer: "To make a booking, navigate to our 'Book Now' section, choose your service, and follow the prompts." },
    { question: "Can I change my booking dates?", answer: "Yes, you can change your booking dates subject to availability, up to 48 hours before your scheduled booking." },
    { question: "What happens if I need to cancel my booking?", answer: "You can cancel through our website. If more than 24 hours before, a full refund will be issued." },
    // Additional FAQs can be added here as needed
];

// BookingFAQ component handles displaying and filtering FAQs
const BookingFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Filter FAQs based on search term
    const filteredFaqs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h2>Booking Information</h2>
            <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="faq-search-input"
            />
            {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="no-results">No results found. Please try a different search term.</div>
            )}
        </div>
    );
};

// Book component includes the BookingFAQ component and could potentially include more related content
export function Book() {
    return (
        <div>
            <BookingFAQ />
        </div>
    );
}

export default Book;  // If you wish to export Book as the default export of the file
