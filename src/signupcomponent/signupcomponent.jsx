import React, { useState } from 'react';
import axios from 'axios';
import './signupcomponent.css';

function SignupComponent() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerUrl = 'http://localhost:8000/register';
        try {
            const response = await axios.post(registerUrl, userData);
            if (response.status === 201) { // Checks if the HTTP status code is 201 for Created
                alert('Registration successful');
                // Optionally redirect user or clear form here
            } else {
                throw new Error(`Unexpected response code: ${response.status}`);
            }
        } catch (error) {
            console.error('Registration failed:', error);
            if (error.response) {
                // Show more specific error from server if available
                alert('Registration failed: ' + (error.response.data.message || 'Unknown error'));
            } else {
                // Handle cases where the error is not from the server
                alert('Registration failed: Network error or server is unreachable');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h1>Register</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={userData.username} onChange={handleChange} placeholder="Username" required />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required />
            </div>

            <button type="submit" className="signup-button">Register</button>
        </form>
    );
}

export default SignupComponent;
