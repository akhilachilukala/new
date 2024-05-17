// ChatComponent.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:5000");  // Initialize socket connection globally outside the component

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        // Listening for incoming messages
        socket.on('message', (message) => {
            setMessages(prevMessages => [...prevMessages, message]); // Update based on previous state
        });

        return () => {
            socket.off('message');
            socket.disconnect(); // Cleanup listener and disconnect on component unmount
        };
    }, []); // Empty array ensures effect runs once per component lifecycle

    const sendMessage = (e) => {
        e.preventDefault();
        if (input) {
            socket.emit('sendMessage', input, () => setInput(''));
        }
    };

    return (
        <div>
            <h1>Live Chat</h1>
            {messages.map((msg, index) => (
                <div key={index}>{msg.text}</div>  // Ensure `msg` has a unique identifier for key if possible
            ))}
            <form onSubmit={sendMessage}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatComponent;
