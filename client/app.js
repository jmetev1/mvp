const app = angular.module('app', [])
  .service('sendService', function($http) {
    this.send = (options, cb) => {
      $http(options).then((response) => {
        cb(response);
      });
    };
  })
  .component('showMap', {
    templateUrl: './indexTemplate.html',
    controller: function MapControl(sendService) {
      this.loadMap = function (array) {
        
        console.log(array)
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: array[0].position,
        });
        array.forEach(pool => {
          console.log(pool)
          marker = new google.maps.Marker({
            position: pool.position,
            map: map,
          });
        });
        google.maps.event.addListener(map, 'click', (event) => {
          marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
          });
          coord = marker.getPosition();
        });
      };
      this.example = () => {
        console.log('example called');
        this.loadMap([{
          position: {
            lat: -25.363, lng: 131.044,
          },
        }]);
      };
      this.show = () => {
        console.log('show called')
        let options = {
          method: 'GET',
          url: '/getPools',
        };
        sendService.send(options, (resp) => {
          // console.log(pools)
          pools = resp.data;
          pools.forEach(pool => console.log(pool))
        });
      };
      this.submit = () => {
        let data = {
          username: this.username,
          // lat: coord.lat(),
          // lng: coord.lng(),
          position: coord,
          review: this.review,
        };
        let options = {
          method: 'POST',
          url: '/submit',
          data: data,
        };
        sendService.send(options, () => console.log('sent?'))
      };
    },
  });
