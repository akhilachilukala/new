import React, { useState } from 'react';

function AccountSettings() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await fetch('http://localhost:8000/updateSettings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            setMessage(`User settings updated successfully!`);
        } catch (error) {
            console.error('Error updating settings:', error);
            setMessage(`Failed to update settings: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
            </div>
            <button type="submit" disabled={isSubmitting}>Update Settings</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default AccountSettings;
