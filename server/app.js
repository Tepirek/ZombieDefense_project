const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express()

app.use(express.static(`${__dirname}/../client`));

const server = http.createServer(app);
const io = socketio(server);

const getDate = () => {
    let date = new Date();
    let hours = date.getHours();
    hours = (hours < 10) ? `0${hours}` : hours;
    let minutes = date.getMinutes();
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    let seconds = date.getSeconds();
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    date = `${hours}:${minutes}:${seconds}`;
    return date;
};

let messages = [];

io.on('connection', (sock) => {
    sock.emit('message', `You are connected! <small>${sock.id}</small>`);
    sock.on('message', (text) => {
        messages.push(`<b>${getDate()}</b> - ${text}`);
        io.emit('message', `<b>${getDate()}</b> - ${text}`);
    });
    sock.on('getChat', () => {
        messages.forEach(message => {
            sock.emit('message', (message));
        });
    });
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(8080, () => {
    console.log('Listening on port 8080! Server is ready!');
});