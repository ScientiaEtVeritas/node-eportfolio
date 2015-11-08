var express = require('express');
var app = express();

/* Verschiedene Routen */
app.get('/about', function (req, res) {
    res.send('about');
});

/* Reguläre Ausdrücke */
app.get(/node/, function(req,res) {
    res.send('Oh. node is cool.');
});

/* Statische Files */
app.use(express.static('public'));

var server = app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
});