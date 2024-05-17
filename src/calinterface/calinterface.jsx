import React, { useState } from 'react';

function CallInterface() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCall = () => {
        fetch('/initiate-call', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ toNumber: phoneNumber })
        })
            .then(response => response.json())
            .then(data => alert(data.message))
            .catch(error => alert('Failed to initiate call: ' + error.message));
    };

    return (
        <div>
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
            />
            <button onClick={handleCall}>Call Me</button>
        </div>
    );
}

export default CallInterface;
