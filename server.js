var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var cors = require('cors');
var morgan = require('morgan');

var routes = require('./routes/routes');

var app = express();

mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected', (err) => {
    console.log('Connected successfully');
});

mongoose.connection.on('error', (err) => {
    if(err)
        console.log('Error occured ', err);
});

app.use(morgan('dev'));
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(express.static(__dirname + '/public'));

app.use('/api', routes);

app.use('/', function(req, res) {
    res.send('reached here');
});

app.listen(8080);