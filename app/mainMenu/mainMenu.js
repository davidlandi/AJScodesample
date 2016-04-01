'use strict';

angular.module('myApp.mainMenu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainMenu', {
    templateUrl: 'mainMenu/mainMenu.html',
    controller: 'MainMenuCtrl'
  });
}])

.controller('MainMenuCtrl', [function() {

}]);