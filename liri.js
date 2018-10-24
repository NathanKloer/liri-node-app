require("dotenv").config();
var keys = require("./keys.js")
var request = require("request")
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//var spotifyKey = new Spotify(keys.spotify);
var command = process.argv[2];
var value = process.argv[3];

// First attempt at getting concert() function to work

//function concert() {
  //request("https://rest.bandsintown.com/values/" + value + "/events?app_id=codingbootcamp", function (response) {
      //console.log(response);
      //console.log("([==Results==])"),
      //console.log("You searched for " + request.eventData.venue);
      //console.log("Next show at: " + request.venueData)
      //console.log("Located at: " + valueEvents.city + ", " + valueEvents.region)
      //console.log("on " + valueEvents.datetime)
    //});
//}

var concert = function() {
  var queryURL = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp"
 
  request(queryURL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);
 
      if (!jsonData.length) {
        console.log("No results found for " + value);
        return;
      }
 
      console.log("Upcoming concerts for " + value + ":");
 
      for (var i = 0; i < jsonData.length; i++) {
        var show = jsonData[i];
 
        // Print data about each concert
        // If a concert doesn’t have a region, display the country instead
        // Use moment to format the date
        console.log(
          show.venue.city + ", " + (show.venue.region || show.venue.country) + " at " + show.venue.name + " " + moment(show.datetime).format("MM/DD/YYYY")
        );
      }
    }
  });
 };
 var spotify = function() {
  //var queryURL = "https://api.spotify.com/v1/search?q=" + value + "type=track"
 
  spotify.search({ type: 'track', query: value }, function(error, data) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);
 
      if (!jsonData.length) {
        console.log("No results found for " + value);
        return;
      }
        // Print data about each concert
        // If a concert doesn’t have a region, display the country instead
        // Use moment to format the date
      console.log("Artist: " + data.album.artists[name] + "\n" + value + "\n" + data.album.artists[href] + "\n" + data.album.name);
      
    }
  });
 };
 spotify.search({ type: 'track', query: value }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 });
switch (command) {
  case "concert-this":
    concert();
    break;

  case "spotify-this-song":
    spotify();
    break;

  case "movie-this":
    movie();
    break;

  case "do-what-it-says":
    dwis();
    break;
};
