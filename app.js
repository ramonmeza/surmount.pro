// Includes
var express = require('express');
var app = express();
var parser = require('body-parser');

// Set app properties
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(parser.urlencoded({ extended: true }));

// Routes
var indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

var teamsRoutes = require('./routes/teams');
app.use('/teams', teamsRoutes);

// 404 route
app.get('*', function(req, res) {
    res.send('404');
});


// Start server
app.listen(3000, function() {
    console.log('App started...');
});