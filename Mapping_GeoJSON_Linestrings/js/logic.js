// Add console.log to check is our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
//let lights = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //maxZoom: 18,
    //accessToken: API_KEY
//});
let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
  });
// We create the dark view tile layer that will be an option for our map.
//let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //maxZoom: 18,
    //accessToken: API_KEY
//});
let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
  });

  // Create a base layer that holds both maps.
//let baseMaps = {
  //Light: lights,
  //Dark: dark
//};
let baseMaps = {
  "Day Navigation": day,
  "Night Navigation": night
};

// Create the map object with center, zoom level and default layer.
//let map = L.map('mapid', {
  //center: [44.0, -80.0],
  //zoom: 2,
  //layers: [lights]
//});
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [night]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/Shikharbhd/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
//d3.json(torontoData).then(function(data) {
  //console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data).addTo(map);
//});
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style : myStyle,
  onEachFeature: function(feature,layer) {
    console.log(layer);
   layer.bindPopup("<h2>" + 'Airline:' + feature.properties.airline + "</h2> <hr> <h3>" + 'destination:' + feature.properties.dst +"</h3>" )
    } 
  })
.addTo(map);
});

//Skill Drill//

// 1. to change the default maplayer as night and day navigation 
    //a. change the title layer as navigation-night-v1
    //let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //maxZoom: 18,
    //accessToken: API_KEY
    //});
    //b. Add second title layer as navigation-day-v1
    //let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //maxZoom: 18,
    //accessToken: API_KEY
    //});

    //Accordingly change the variables for base map and default map

    //let baseMaps = {
      //Day: day,
      //Night: night
    //};
       
    // Create the map object with center, zoom level and default layer.
    //let map = L.map('mapid', {
      //center: [44.0, -80.0],
      //zoom: 2,
      //layers: [night]
    //});

    // Create a style for the lines.
    //let myStyle = {
      //color: "#ffffa1",
      //weight: 2
    //}
    //d3.json(torontoData).then(function(data) {
  //console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data, {
  //style : myStyle,
  //onEachFeature: function(feature,layer) {
    //console.log(layer);
   //layer.bindPopup("<h2>" + 'Airline:' + feature.properties.airline + "</h2> <hr> <h3>" + 'destination:' + feature.properties.dst +"</h3>" )
    //} 
  //})
//.addTo(map);
//});