var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

mongoose.connect('mongodb://localhost/emberWeatherData');

var forecastSchema = new mongoose.Schema({
  cityName: 'string',
  hiTemp: 'number',
  loTemp: 'number',
  currentTemp: 'number',
  icon: 'string',
  date: 'number'
});

var ForecastModel = mongoose.model('forecast',forecastSchema);
//New lines!
app.get('/api/',function(req,res) {
  res.send('This is really Working');
});

app.get('/api/forecasts', function(req,res) {
  ForecastModel.find({},function(err,docs) {
    if(err) {
      res.send({error:err});
    }
    else {
      res.send({forecast:docs});
    }
  });
});

app.listen('4500');