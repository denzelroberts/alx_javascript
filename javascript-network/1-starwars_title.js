#!/usr/bin/node
let request = require('request');
let url = 'https://swapi-api.alx-tools.com/api/films/';
let episodeNumber = process.argv[2];
request(url + episodeNumber, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    console.log(JSON.parse(body).title);
  } else {
    console.log('Wrong status code');
  }
});