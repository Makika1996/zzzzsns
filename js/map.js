function myMap() {
  var mapOptions = {
    center: new google.maps.LatLng(45.2465394, 19.8489526),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  loc = new google.maps.LatLng(marker.position.lat(45.2465394), marker.position.lng(19.8489526));
  bounds.extend(loc);
  map.fitBounds(bounds);
  map.panToBounds(bounds);
}
