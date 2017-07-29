var app = angular.module('app', [])
  .service('sendService', function($http) {
    this.send = (userName, password, cb) => {
      //add server options!
      $http.post('http://localhost:8080/POST', {
        user: username,
        password: password
      }).then(function(reply) {
        cb(reply);
      })
    }
  })
  .component('showMap', {
    templateUrl: './indexTemplate.html',
    controller: function MapControl(sendService) {
      this.submit = function(email, password) {
        console.log('coyo', email)
        console.log('in init map')
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        this.coord = uluru.lat;
          google.maps.event.addListener(map, 'click', function(event) {
            marker = new google.maps.Marker({
              position: event.latLng,
              map: map
            });
            console.log(marker.position)
        })
        this.wolf = 'coyote100';
      };
    },
  });
