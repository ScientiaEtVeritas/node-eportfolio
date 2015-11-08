var express = require('express');
var app = express();

/* Statische Files */
app.use(express.static('public'));

var server = app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
    io.emit('new user', 'new user is connected');
    socket.on('event', function (data) {
        console.log(data);
    });
});