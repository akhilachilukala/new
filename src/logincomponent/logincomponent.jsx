import React, { useState } from 'react';
import axios from 'axios';
// import './logincomponent.css';

function LoginComponent({ onLoginSuccess }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const loginUrl = 'http://localhost:8000/login';
        try {
            const response = await axios.post(loginUrl, credentials);
            setLoading(false);
            if (response.data && response.data.token) {
                // Optionally use secure, http-only cookies instead of localStorage
                localStorage.setItem('token', response.data.token);
                if (onLoginSuccess) {
                    onLoginSuccess(response.data.token); // Pass token if needed or just call it
                }
            } else {
                setError('Unexpected issue during login; please try again.');
            }
        } catch (error) {
            setLoading(false);
            if (error.response) {
                setError(`Login failed: ${error.response.data.message || error.response.statusText}`);
            } else {
                setError('Login failed: Network error or server not reachable.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Login</h1>
            {error && <div className="error">{error}</div>}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button type="submit" className="login-button" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
}

export default LoginComponent;
