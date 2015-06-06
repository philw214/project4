$( document ).ready(function() {


  $('.mirror').on('keyup', function() {
    $('.'+$(this).attr('class')).val($(this).val());

    // you could simplify this to something like the following, since you know
    // the class of the object, and I'd also extract the final argument to a
    // variable for readability:
    var text = $(this).val();
    $('.mirror').val(text);
  });

  L.mapbox.accessToken = 'pk.eyJ1IjoicHcyMTQiLCJhIjoiOGNjNzY4ZDZmMGMyNzVkZDU5OTg1ZmVkMzFmZWMwZTQifQ.ABzSby3NgC5b0WnTg-ONMw';
  var map = L.mapbox.map('map', 'pw214.b4e538fe')
      .setView([26, 12], 2)

  for(var i=0; i<data.length; i++){
    var marker = L.marker([data[i].latitude, data[i].longitude], 2).addTo(map);
    // why not add more content here on the post? or perhaps a link to the post's
    // show page?
    var markerHtml = data[i].location.toUpperCase();
    marker.bindPopup(markerHtml);
  }
});
