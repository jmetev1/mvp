var app = angular.module('app', []).
  component('showMap', {
    template: 'Hello, {{$ctrl.map}}, map?' +
     '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function MapControl() {
      this.map = '..00 Island map!';
      this.not = 'does'
      this.hawk = 'fake Eagle'


      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];    
      // this.database: function Database() {
        
      // }
    }
  });
