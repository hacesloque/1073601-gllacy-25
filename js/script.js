var map;

function initMap() {
  (map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 59.939348,
      lng: 30.329308
    },
    zoom: 16,
    disableDefaultUI: true
  })),
  (image = "img/decor/pin.svg"),
  (marker = new google.maps.Marker({
    position: {
      lat: 59.938878,
      lng: 30.322994
    },
    optimized: false,
    map: map,
    icon: image
  }));
}

var link = document.querySelector(".feedback-button");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
