// Create URL variable
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create map and add streets
var map = L.map("map", {
  center: [20,0],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);

// Add earthquake data to map
d3.json(url, function(data){
  L.geoJson(data, {
    //pointToLayer: newMarkers
  }).addTo(map);
});

// // Attempt to change markers to circles
// function newMarkers(features, location) {
//   var magnitude = features.properties.mag;
//   var place = features.properties.place;
//     if (magnitude <= 2.9){
//       var color = "yellow"
//     }else if (magnitude <= 4.9){
//       var color = "orange"
//     }else if (magnitude <= 7.49){
//       var color = "red"
//     }else {var color = "black"}
  
//   var circle = {
//     radius: magnitude,
//     color: color,
//     fillOpacity: 1,
//     weight: 1
//   }
//   .addTo(map)
// };

