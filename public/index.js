mapboxgl.accessToken = '<Your Mapbox Access Token>';
var client = new MapboxClient(mapboxgl.accessToken);
    console.log(client);
    var input=prompt('Enter address');
    var address = input;
    var test = client.geocodeForward(address, function(err, data, res) {
      // data is the geocoding result as parsed JSON
      // res is the http response, including: status, headers and entity properties
      console.log(res);
      console.log(res.url);
      console.log(data);
      var coordinates = data.features[0].center;
      var lng=coordinates[0];
      var lat=coordinates[1];
      console.log(lng,lat);
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [lng,lat], // starting position [lng, lat]
    zoom: 13 // starting zoom
})
 new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
});
