// Add console.log to check is our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30.194444, -97.67],4);

// Coordinates for each point to be used in the poly line.
let line = [
    [33.9416, -118.4085],
    [39.861667, -104.673056],
    [30.194444, -97.67],
    [43.676667, -79.630556],
    [40.639722, -73.778889]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight:3,
    dashArray: [5,5],
    

  }).addTo(map);

// Get data from cities.js
let cityData = cities;

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);