'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.mainMenu',
  'myApp.addCustomer',
  'myApp.modifyCustomer',
  'myApp.report',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/mainMenu'});
}]);
