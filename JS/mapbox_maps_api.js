const mapboxToken = 'pk.eyJ1IjoiZGVtb3Q1NCIsImEiOiJja3ByMXQzMTUwOTZkMm9xdnljcWZ3eGh1In0.2hW1QxvgNf2eQKxqFN-GsA'

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4936, 29.4241],
    zoom: 12
});

var marker = new mapboxgl.Marker()
    .setLngLat([-98.4978, 29.6103])
    .addTo(map);

// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.4978, 29.6103])
//     .setHTML("<p>Chama Gaucha!</p>")
//     .addTo(map)

var chamaPopup = new mapboxgl.Popup()
    .setHTML("<p>Chama Gaucha!</p>")


marker.setPopup(chamaPopup)


let restaurantArray = [
    {
        name: "Chama Gaucha",
        price: "$$$",
        location: [-98.4978, 29.6103],

    },
    {

        name: "Mi Tierra",
        price: "$$",
        location: [-98.5001, 29.4251],


    }, {


        name: "Pappasitos",
        price: "$$",
        location: [-98.5689, 29.5392],

    }
];


restaurantArray.forEach(function (marker) {
    let popup = new mapboxgl.Popup()
        .setHTML('<div style="text-align:center">'
          + '<p>' + marker.name + '</p>'
            + '<p>' + marker.price + '</p>'
        )

    new mapboxgl.Marker()
        .setLngLat(marker.location)
        .setPopup(popup)
        .addTo(map);
})



map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

map.addControl(new mapboxgl.NavigationControl());












// function getReverseGeocode(point, marker) {
//
//     $.ajax({
//             url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?access_token=${mapboxgl.accessToken}`,
//             success: function (data) {
//                 marker.setPopup(marker.getPopup()
//                     .setHTML(data.features[0].place_name))
//                     .togglePopup();
//             }
//         }
//     );
// }