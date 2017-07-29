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
      this.prevreview = 'Not yet reviewed';
      
      this.loadMap = function (array) {
        console.log(array)
        array.forEach(pool => {
          if (!pool.position) {
            pool.position = {
              lat: pool.lat,
              lng: pool.lng,
            };
          }
        });
        const mapOptions = {
          zoom: 20,
          center: array[0].position,
          mapTypeId: 'satellite',
        };
        let map = new google.maps.Map(document.getElementById('map'), mapOptions);
        array.forEach(pool => {
          console.log(pool.position, 25)
          marker = new google.maps.Marker({
            position: pool.position,
            map: map,
          });
        });
        this.addPool = () => {
          google.maps.event.addListener(map, 'click', (event) => {
            marker = new google.maps.Marker({
              position: event.latLng,
              map: map,
            });
            coord = marker.getPosition();
          });
        };
      };
      this.example = () => {
        // console.log('example called');
        this.loadMap([{
          position: {
            lat: 29.974805419131368, lng: -90.07029509001768,
          },
        }]);
      };
      // this.start = () => {
      //   setTimeout(() => {
      //     console.log('timer set')
      //     this.example;
      //   }, 1000)};();
      this.show = () => {
        // console.log('show called')
        let options = {
          method: 'GET',
          url: '/getPools',
        };
        sendService.send(options, (resp) => {
          let pools = resp.data;
          this.loadMap(resp.data);
          // pools.forEach(pool => console.log(pool))
        });
      };
      this.submit = () => {
        let data = {
          username: this.username,
          review: this.review,
          lat: coord.lat(),
          lng: coord.lng(),
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

