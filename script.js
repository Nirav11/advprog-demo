var mymap = L.map('mymap').setView([38.60, -90.677], 12);

  // load a tile layer
 L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var cameraIcon = L.icon({
    iconUrl: 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-128.png', 
    iconSize: [32, 32],  
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

// Creating markers and specifying its location

var marker1 = L.marker([38.62535, -90.18677
], { icon: cameraIcon }).addTo(mymap);
var marker2 = L.marker([38.61, -90.25], { icon: cameraIcon }).addTo(mymap);
var marker3 = L.marker([38.6387, -90.29031], { icon: cameraIcon }).addTo(mymap);
var marker4 = L.marker([38.6418, -90.2948], { icon: cameraIcon }).addTo(mymap);
var marker5 = L.marker([38.6431, -90.2544], { icon: cameraIcon }).addTo(mymap);

// Binding Popup to Markers
marker1.bindPopup("<b>St. Louis Gateway Arch on the Riverfront Gateway Arch</b><br>MO 63102").openPopup();

marker2.bindPopup("<b>Botanical Garden </b><br>4344 Shaw Blvd, St. Louis, MO 63110").openPopup();

marker3.bindPopup("<b>Saint Louis Zoo</b><br> 1 Government Dr, St. Louis, MO 63110").openPopup();

marker4.bindPopup("<b>Saint Louis Art Museum</b><br> 1 Fine Arts Dr, St. Louis, MO 63110").openPopup();

marker5.bindPopup("<b>Cathedral Basilica </b><br>4431 Lindell Blvd., St. Louis, Missouri 63108").openPopup();
