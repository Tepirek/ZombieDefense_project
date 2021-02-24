const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express()

app.use(express.static(`${__dirname}/../client`));

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (sock) => {
    const date = Date('MM:HH');
    sock.emit('message', `${date} You are connected! <small>${sock.id}</small>`);
    sock.on('message', (text) => io.emit('message', text));
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(8080, () => {
    console.log('Listening on port 8080! Server is ready!');
});