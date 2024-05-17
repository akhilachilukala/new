import io from 'socket.io-client';

// Connect to the server
const socket = io('http://localhost:8000');

socket.on('connect', () => {
    console.log('Successfully connected!');
    console.log('Session ID:', socket.id);
});

socket.on('disconnect', (reason) => {
    console.log('Disconnected:', reason);
});

// Additional event listeners here
