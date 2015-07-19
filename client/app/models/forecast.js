import DS from 'ember-data';

export default DS.Model.extend({
  cityName: DS.attr('string'),
  hiTemp: DS.attr('number'),
  loTemp: DS.attr('number'),
  currentTemp: DS.attr('number'),
  icon: DS.attr('string'),
  date: DS.attr('number')
}).reopenClass({
  FIXTURES: [
    {
        "id": 1,
        "cityId": 1,
        "cityName": "Cancela",
        "icon": "wi-day-sunny",
        "currentTemp": 73,
        "hiTemp": 86,
        "loTemp": 65,
        "date": 4678353853485873
    },
    {
        "id": 2,
        "cityId": 2,
        "cityName": "Hasan",
        "icon": "wi-day-sunny",
        "currentTemp": 76,
        "hiTemp": 85,
        "loTemp": 70,
        "date": 4678353853485873
    },
    {
        "id": 3,
        "cityId": 3,
        "cityName": "Gannan",
        "icon": "wi-day-storm-showers",
        "currentTemp": 80,
        "hiTemp": 77,
        "loTemp": 65,
        "date": 4678353853485873
    },
    {
        "id": 4,
        "cityId": 4,
        "cityName": "Goba",
        "icon": "wi-cloudy",
        "currentTemp": 76,
        "hiTemp": 76,
        "loTemp": 67,
        "date": 4678353853485873
    },
    {
        "id": 5,
        "cityId": 5,
        "cityName": "Portelinha",
        "icon": "wi-day-showers",
        "currentTemp": 74,
        "hiTemp": 78,
        "loTemp": 71,
        "date": 4678353853485873
    },
    {
        "id": 6,
        "cityId": 6,
        "cityName": "Acacías",
        "icon": "wi-day-storm-showers",
        "currentTemp": 70,
        "hiTemp": 87,
        "loTemp": 65,
        "date": 4678353853485873
    },
    {
        "id": 7,
        "cityId": 7,
        "cityName": "Boavista",
        "icon": "wi-day-showers",
        "currentTemp": 74,
        "hiTemp": 78,
        "loTemp": 67,
        "date": 4678353853485873
    },
    {
        "id": 8,
        "cityId": 8,
        "cityName": "Pital",
        "icon": "wi-cloudy",
        "currentTemp": 65,
        "hiTemp": 89,
        "loTemp": 71,
        "date": 4678353853485873
    }
]
});
