
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        navigator.geolocation.getCurrentPosition (onPlacesSuccess, onPlacesError, { enableHighAccuracy: true });
    }
};

app.initialize();

var onPlacesSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
   
    create_map(Latitude, Longitude);
    create_marker(Latitude, Longitude);

}


function create_marker (Latitude, Longitude){
    var myLatLng = {lat: Latitude, lng: Longitude};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

function create_map(Latitude, Longitude){
    var latLong = new google.maps.LatLng(Latitude, Longitude);

    var mapOptions = {
        center: latLong,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var Map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function onPlacesError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
