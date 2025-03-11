// chatServer.js
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });
server.on('connection', (socket) => {
    console.log('A new client connected.');
    // Send a welcome message to the client
    socket.send('Welcome to the chatroom!');
    // Listen for incoming messages from clients
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
console.log('Chat server is running on ws://localhost:8080');
