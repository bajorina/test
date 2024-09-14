var map = L.map('map').setView([51.05938479454575, 19.44871125005095], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Add Locate Control
var lc = L.control.locate().addTo(map);

// Add Routing Control
var control = L.Routing.control({
    waypoints: [
        L.latLng, // Starting point
        L.latLng(51.06099002292475, 19.467914336965606)    // Destination
    ],
    routeWhileDragging: true
}).addTo(map);

// Start locating
lc.start();


lc.on('locationfound', function(e) {
    control.setWaypoints([
        L.latlng, // User's current location
        L.latLng(51.05938479454575, 19.44871125005095) // Destination
    ]);
});
