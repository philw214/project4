$( document ).ready(function() {

  // $("#search").click(function(){
  //   var latitude = $("#latitude").val();
  //   var longitude = $("#longitude").val();
  //   var zoom = $("#zoom").val();
  //
  //   var marker = L.marker([latitude, longitude], zoom).addTo(map);
  //   var markerHtml = 'test marker';
  //   marker.bindPopup(markerHtml);
  // });

  L.mapbox.accessToken = 'pk.eyJ1IjoicHcyMTQiLCJhIjoiOGNjNzY4ZDZmMGMyNzVkZDU5OTg1ZmVkMzFmZWMwZTQifQ.ABzSby3NgC5b0WnTg-ONMw';
  var map = L.mapbox.map('map', 'pw214.f8720651')
      .setView([26, 12], 2)

  for(var i=0; i<data.length; i++){
    var marker = L.marker([data[i].latitude, data[i].longitude], 2).addTo(map);
    var markerHtml = data[i].location;
    marker.bindPopup(markerHtml);
  }
});
