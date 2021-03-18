const mymap = L.map('mapid').setView([46.481373, 30.71643], 20);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXJhZ29sZCIsImEiOiJja21ldzRsaGIyazdvMm9sYW9oN2FxcHpiIn0.RJCCQDazVMZRPGLaFmpTJg'
}).addTo(mymap);

function onMapClick(e) {
   console.log("hi" + e.Latlng)
}
mymap.on('click', onMapClick);
const Icon = L.icon({
    iconUrl: 'https://med-project.org/wp-content/themes/medproject/css/images/house-icon.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [60, 60], // size of the icon
    iconAnchor:   [20, 60], // point o shadf the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
const marker = L.marker([46.481338, 30.716505], {icon: Icon})
.bindPopup("This is my home.")
.addTo(mymap);

var circle = L.circle([46.488146, 30.741403], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 800
}).addTo(mymap);

circle.bindPopup("This is the heart of Odessa<br> History Center");

function onMapClick(e) {
   console.log("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);

const markerTwo = L.marker([46.475102, 30.73781346])
.bindPopup("This is my job.")
.addTo(mymap);