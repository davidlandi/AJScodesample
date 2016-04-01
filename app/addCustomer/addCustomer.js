'use strict';

angular.module('myApp.addCustomer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addCustomer', {
    templateUrl: 'addCustomer/addCustomer.html',
    controller: 'AddCustomerCtrl'
  });
}])

.controller('AddCustomerCtrl', ['$scope', function($scope) {
    console.log('addCustomerController');
    $scope.customers = [];
    
    for(var customer in localStorage){
        var newCustomer = JSON.parse(localStorage[customer]);
        $scope.customers.push(newCustomer);
    }
    
    $scope.addCustomer = function(){
        console.log('btnAddCustomerClick');
        var newCustomer = {
            id : localStorage.length,
            name : $scope.txtName,
            email : $scope.txtEmail,
            phone : $scope.txtPhone,
            street :$scope.txtStreet,
            city : $scope.txtCity,
            state : $scope.txtState,
            zip : $scope.txtZip
        };
        
        localStorage.setItem('customer' + localStorage.length, JSON.stringify(newCustomer));
        
        $scope.customers.push(newCustomer);
        
        clearForm();
    };
    
     var clearForm = function(){
        $scope.txtName = '';
        $scope.txtEmail = '';
        $scope.txtPhone = '';
        $scope.txtStreet = '';
        $scope.txtCity= '';
        $scope.txtState = '';
        $scope.txtZip= '';
    };
}]);
