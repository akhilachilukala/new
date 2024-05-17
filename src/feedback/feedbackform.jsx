import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
    const [user, setUser] = useState('');
    const [feedbackText, setFeedbackText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!user || !feedbackText) {
            alert('Both User ID and Feedback text are required.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/api/feedback', { user, feedbackText });
            console.log('Feedback submitted:', response.data);
            alert('Feedback submitted successfully!');
        } catch (error) {
            console.error('Error sending feedback:', error.response ? error.response.data : error.message);
            alert('Error sending feedback: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    return (
        <div>
            <h1>FeedBack</h1>
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>



                <input
                    type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    placeholder="User ID"
                />
                <textarea
                    value={feedbackText}
                    onChange={e => setFeedbackText(e.target.value)}
                    placeholder="Feedback"
                />

                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

export default FeedbackForm;
