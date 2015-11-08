var express = require('express'); // Express-Modul laden
var app = express(); // Express-App erzeugen

app.use(express.static('public')); // Statische Dateien aus dem Ordner public ausliefern

var server = app.listen(3000, function () {
    console.log('Chat app listening at http://localhost:3000');
}); // Server auf Port 3000 hören lassen

var io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.username = "Guest" + Math.round(Math.random()*5000); // Zufälligen Usernamen erzeugen
    io.emit('message', '<strong>' + socket.username + '</strong> connected'); // An alle: Benutzer ist verbunden
    socket.on('message', function (data) { // Benutzer hat eine Nachricht gesendet
        io.emit('message', '<strong>' + socket.username + '</strong>' + ': ' + data); // An alle: Nachricht von Benutzer
    });
    socket.on('disconnect',function() { // Benutzer hat den Chat verlassen
        io.emit('message', '<strong>' + socket.username + '</strong> disconnected'); // An alle: Benutzer ist nicht
        // mehr verbunden
    });
});