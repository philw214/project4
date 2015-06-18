$( document ).ready(function() {

  $('.mirror1').on('keyup', function() {
    $('.'+$(this).attr('class')).val($(this).val());
  });

  $('.mirror2').on('keyup', function() {
    $('.'+$(this).attr('class')).val($(this).val());
  });

  L.mapbox.accessToken = 'pk.eyJ1IjoicHcyMTQiLCJhIjoiOGNjNzY4ZDZmMGMyNzVkZDU5OTg1ZmVkMzFmZWMwZTQifQ.ABzSby3NgC5b0WnTg-ONMw';
  var map = L.mapbox.map('map', 'pw214.f8720651')
      .setView([15, 14], 1)

  for(var i=0; i<data.length; i++){
    var marker = L.marker([data[i].latitude, data[i].longitude], 2).addTo(map);
    var markerHtml = data[i].location.toUpperCase();
    marker.bindPopup(markerHtml);
  }
});
