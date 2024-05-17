import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupComponent from "../signupcomponent/signupcomponent";
import Popup from "reactjs-popup";
import "./serach.component.css";  // Ensuring filename is correct

export function Searchcomponent() {
    const data = ['booking', 'payment', 'Service', 'helpservice', 'faq'];
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const results = term ? data.filter(item => item.toLowerCase().includes(term.toLowerCase())) : [];
        setSearchResults(results);
    };

    return (
        <section>
            <header className="fixed-header">
                <div className="logo-nav-child">
                    <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/bookings">Bookings</Link>&nbsp;&nbsp;;
                    <Link to="/payment">FAQ Payment</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/faq">FAQ Bookings</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/helpcentre">Helpcenter</Link>
                    <Link to="/customersupport">Customer Support</Link>
                    <Link to="/account">AccountManagementFAQ</Link>


                    <div className="search-container">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        {searchTerm && (
                            <ul className="search-results">
                                {searchResults.map((item, index) => (
                                    <li key={index}><Link to={`/faq`}>{item}</Link></li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="authentication-buttons">
                        <div onClick={() => setIsSignupOpen(true)}>Signup</div>
                        {isSignupOpen && (
                            <Popup open={isSignupOpen} closeOnDocumentClick onClose={() => setIsSignupOpen(false)}>
                                <SignupComponent />
                            </Popup>
                        )}
                    </div>
                </div>
            </header>
        </section>
    );
}
