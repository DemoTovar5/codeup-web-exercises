const mapboxToken = 'pk.eyJ1IjoiZGVtb3Q1NCIsImEiOiJja3BwbjhiNTQwNDY2MnBwYWV5aTdjOGV5In0.wExUZWsP8-CcgybwHgQWaw'

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4936, 29.4241],
    zoom: 12
});

// call function to create method and give initial point
let marker = setMarker([-98.4936, 29.4241]);

// call addMapEvent AFTER the marker has been initially set
addMapEvent(marker);

// creates new geocoder and assign to variable
let geocoder = setGeocoder();
addGeocoderToMap(geocoder);
addGeoCoderEvent(geocoder);
setPopup("This is my popup!");

// creates and returns a new Geocoder (search box)
    function setGeocoder(){
    return new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
    }
//
// adds event listener to Geocoder and sets new marker location
    function addGeocoderToMap(geocoder){
        map.addControl(geocoder);
    }

    function addGeoCoderEvent(geocoder){
    geocoder.on("result", function(event){
        marker.setLngLat(event.result.geometry.coordinates)

        setPopup(event.result.result.name)
    })
    }

// creates the marker
function setMarker(point){
  return new mapboxgl.Marker().setLngLat(point).addTo(map);

}

// adds event to map that changes location of marker
// based on where the user clicks

function addMapEvent(marker){
  map.on('click', function(event){
    console.log(event.lngLat);
     marker.setLngLat(event.lngLat)
         .addTo(map);
      })
}

// function to make the popup!

function setPopup(textDetails){
    let popup = new mapboxgl.Popup()
        .setHTML(`<p>${textDetails}</p>`)
        .addTo(map);

    marker.setPopup(popup);
}
