import DS from 'ember-data';

export default DS.Model.extend({
  cityName: DS.attr('string'),
  hiTemp: DS.attr('number'),
  loTemp: DS.attr('number'),
  currentTemp: DS.attr('number'),
}).reopenClass({
  FIXTURES: [
    {
        "id": 1,
        "cityId": 1,
        "cityName": "Cancela",
        "icon": "gnelson0",
        "currentTemp": 73,
        "hiTemp": 86,
        "loTemp": 65,
        "date": "2014-11-30T01:17:35Z"
    },
    {
        "id": 2,
        "cityId": 2,
        "cityName": "Hasan",
        "icon": "jrichardson1",
        "currentTemp": 76,
        "hiTemp": 85,
        "loTemp": 70,
        "date": "2015-05-08T18:27:55Z"
    },
    {
        "id": 3,
        "cityId": 3,
        "cityName": "Gannan",
        "icon": "jdixon2",
        "currentTemp": 80,
        "hiTemp": 77,
        "loTemp": 65,
        "date": "2015-03-27T00:54:08Z"
    },
    {
        "id": 4,
        "cityId": 4,
        "cityName": "Goba",
        "icon": "ebell3",
        "currentTemp": 76,
        "hiTemp": 76,
        "loTemp": 67,
        "date": "2015-06-20T19:29:25Z"
    },
    {
        "id": 5,
        "cityId": 5,
        "cityName": "Portelinha",
        "icon": "jbailey4",
        "currentTemp": 74,
        "hiTemp": 78,
        "loTemp": 71,
        "date": "2015-04-29T01:36:19Z"
    },
    {
        "id": 6,
        "cityId": 6,
        "cityName": "Acacías",
        "icon": "klong5",
        "currentTemp": 70,
        "hiTemp": 87,
        "loTemp": 65,
        "date": "2015-01-24T22:46:56Z"
    },
    {
        "id": 7,
        "cityId": 7,
        "cityName": "Boavista",
        "icon": "mcarter6",
        "currentTemp": 74,
        "hiTemp": 78,
        "loTemp": 67,
        "date": "2014-11-16T23:38:41Z"
    },
    {
        "id": 8,
        "cityId": 8,
        "cityName": "Pital",
        "icon": "stucker7",
        "currentTemp": 65,
        "hiTemp": 89,
        "loTemp": 71,
        "date": "2014-09-17T04:30:13Z"
    }
]
})
