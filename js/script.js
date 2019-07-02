function initMap() {
    var coordinates = {lat: 59.938878, lng: 30.322994},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        });

        image = '../img/decor/map-marker.png',
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image,
            animation: google.maps.Animation.BOUNCE
        });
}
