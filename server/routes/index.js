var express = require('express'),
    router = express.Router(),
    request = require('request'),
    Forecast = require('../models/forecast');
    // Timestamp = require('../models/timestamp');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// grabs all available forecasts from database
(function() {
    'use strict';

    router.get('/forecasts', function(req, res) {

        Forecast.find(function(err, forecasts) {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            // isUpdated();
            res.send({'forecasts': forecasts});
        });
    });
})();


// function isUpdated() {
//     var time = new Date().getTime();

//     Timestamp.find(function(err, timestamp) {
//         if (err) {
//             return res.send(err);
//         }
//         // if (timestamp) {
//         //     if ((time - timestamp[0].lastUpdated) > 300000) {
//         //         updateWeather();
//         //     } else {
//         //         console.log('no update needed');
//         //     }
//         // } else {
//         //     createTimestamp();
//         //     updateWeather();
//         // }
//             createTimestamp();
//             updateWeather();
//     });
// }

// function createTimestamp() {
//     var time = new Date().getTime();
//     Timestamp.update({}, { $set: {lastUpdated: time}},
//         function(err, response) {
//             if (err) return console.error(err);
//             console.log(response);
//             console.log('time has been updated');
//         });
// }

module.exports = router;