<script>

  var  map;

  // Craate a new blank array for all the list markers.
  var markers = [];

  function initMap() {
// Constructor creates a new map - only center and zoom are required.
map = new google.maps.Map(document.getElementById('map'),{
   center: { lat: 41.887600, lng: -87.634689},
   zoom: 13
});

var locations = [
{title: 'Wrigley Field', location: {lat: 41.948694, lng: -87.655365}}
{title: 'The Vic', location: {lat: 41.939795, lng: -87.653917}},
{title: 'House Of Blues', location: {lat: 41.888473, lng: -87.629151}},
{title: 'Aragon Ballroom', location: {lat: 41.969622, lng: -87.657953}},
{title: 'The Riviera Theatre', location: {lat: 41.968845, lng: -87.659941}},
{title: 'Soldier Field', location: {lat: 41.862545, lng: -87.616710}}
];
var largeInfowindow = new google.maps.InfoWindow();

var bounds = new google.maps.LatLngBounds();

//The following group uses the location array to create an array of markers on initalize.
for (var i = 0; i < locations.length; i++) {
//Get the postion from the location array.
var position = locations[i].location;
var title = locations[i].title;
// Create a marker per location, and put into markers array.
var marker = new google.maps.Marker({
   map: map,
   position: position,
   title: title,
   animation: google.maps.Animation.DROP,
   id: i
});
// Push the marker to our array of markers.
markers.push(marker);

bounds.extend(marker.position);

//Creates an onclick event to open an infowindow at each marker.
marker.addListener('click', function() {
populateInfoWindow(this, largeInfowindow);
});
}
//Thsi function populates the infowindowwhen the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
//on the markers position

map.fitBounds(bounds);

function populateInfoWindow(marker, infowindow) {
//Check to make sure the infowindow is not already opened on this marker.
if(infowindow.marker != marker) {
   infowindow.marker = marker;
   infowindow.setContent('<div>' + marker.title + '</div>');
   infowindow.open(map, marker);
   //Make sure the marker property is cleared if the infowindow is closed.
   infowindow.addListener('closeclick', function(){
      infowindow.setMarker(null);
   });
}
}

}



</script>
