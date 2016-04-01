'use strict';

angular.module('myApp.report', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/report', {
    templateUrl: 'report/report.html',
    controller: 'ReportCtrl'
  });
}])

.controller('ReportCtrl', ['$scope', function($scope) {
    console.log('ReportCtrl');
    $scope.customers = [];
    
    for(var customer in localStorage){
        var newCustomer = JSON.parse(localStorage[customer]);
        $scope.customers.push(newCustomer);
    }
    
}]);


