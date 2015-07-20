var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var uristring = process.env.MONGOLAB_URI || 'mongodb://localhost/emberWeatherData';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log('database connected!');
});

var routes = require('./routes/index');

var app = express();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api', routes);
// app.use('/forecasts', forecasts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// var forecastSchema = new mongoose.Schema({
//   cityName: 'string',
//   hiTemp: 'number',
//   loTemp: 'number',
//   currentTemp: 'number',
//   icon: 'string',
//   date: 'number'
// });

// var ForecastModel = mongoose.model('forecast',forecastSchema);
// //New lines!
// app.get('/api/',function(req,res) {
//   res.send('This is really Working');
// });

// app.get('/api/forecasts', function(req,res) {
//   ForecastModel.find({},function(err,docs) {
//     if(err) {
//       res.send({error:err});
//     }
//     else {
//       res.send({forecast:docs});
//     }
//   });
// });

app.listen('4500');