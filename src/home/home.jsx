import { Link } from "react-router-dom";

import './home.css';

export function Home() {
    return (
        <div>
            <header className="fixed-header">
                <div className="logo-nav-child">
                    <Link to="/home">Customer</Link>&nbsp;&nbsp;
                    <Link to="/bookings">Bookings</Link>&nbsp;&nbsp;
                    <Link to="/payment">FAQ Payment</Link>&nbsp;&nbsp;
                    <Link to="/faq">FAQ Bookings</Link>&nbsp;&nbsp;
                    <Link to="/helpcentre">Helpcenter</Link>&nbsp;&nbsp;
                    <Link to="/customersupport">Customer Support</Link>
                </div>
            </header>

            <div>
                <Link to="/settings">Account  Settings</Link>
            </div>
            <div>account</div>
            <div></div>
            <div></div>
        </div>
    )
}





