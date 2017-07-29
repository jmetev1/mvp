const app = angular.module('app', [])
  .service('sendService', function($http) {
    this.send = (data, cb) => {
      $http({
        method: 'POST',
        url: '/submit',
        data: data,
      }).then((err, response) => {
        if (err) {
          console.log(err)
        } else {
          cb(response);
        }
      });
    };
  })
  .component('showMap', {
    templateUrl: './indexTemplate.html',
    controller: function MapControl(sendService) {
      let coord= '';
      this.loadMap = function(email, password) {
        let uluru = {lat: -25.363, lng: 131.044};
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        google.maps.event.addListener(map, 'click', (event) => {
          marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
          });
          coord = marker.position
          // console.log(this.coord)
        });
        this.wolf = 'coyote100';
      };
      this.submit = () => {
        let data = {
          username: this.username,
          lat: coord.lat(),
          lng: coord.lng(),
          review: this.review,
        };
        sendService.send(data, () => console.log('sent?'))
      };
    },
  });
