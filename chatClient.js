// chatClient.js
const WebSocket = require('ws');
const readline = require('readline');
// Connect to the chat server

// And update the client URL accordingly:
const socket = new WebSocket('ws://localhost:3000');
// Set up an interface to capture user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
socket.on('open', () => {
    console.log('Connected to the chat server!');
    // Prompt the user to type messages
    rl.on('line', (input) => {
        socket.send(input);
    });
});
// Listen for messages from the server and display them
socket.on('message', (message) => {
    console.log(`Message: ${message}`);
});
// Handle connection errors
socket.on('error', (error) => {
    console.error('WebSocket error:', error);
});
