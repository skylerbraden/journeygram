  var renderers = [];

  GoogleMapsApi.displayRoute = function(origin, place, map){

    options =  {
      preserveViewport: true,
      markerOptions: {
        strokeColor: "black"
      }
    };
    var directionsDisplay = new google.maps.DirectionsRenderer(options);
    renderers.push({renderer: directionsDisplay, id: place.formatted_address});

    directionsDisplay.setMap(map);

    directionsService.route({
      origin: origin.formatted_address,
      destination: place.formatted_address,
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        console.log('Directions request failed due to ' + status);
      }
    });
  };
