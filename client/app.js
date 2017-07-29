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
    controller: function MapControl(sendService, $scope) {
      $scope.coord = '100';
      $scope.submit = function(email, password) {

        console.log(sendService, email, $scope.password)
      }      
      this.wolf = 'coyote100'
      this.coord = 100

    }
  });

  