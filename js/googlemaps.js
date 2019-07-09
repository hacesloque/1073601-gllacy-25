var map;

function initMap() {
  (map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.939348, lng: 30.329308 },
    zoom: 16,
    disableDefaultUI: true
  })),
  (image = "img/decor/pin.svg"),
  (marker = new google.maps.Marker({
    position: { lat: 59.938878, lng: 30.322994 },
    optimized: false,
    map: map,
    icon: image
  }));
}
