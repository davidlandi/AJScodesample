'use strict';

angular.module('myApp.modifyCustomer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/modifyCustomer', {
    templateUrl: 'modifyCustomer/modifyCustomer.html',
    controller: 'ModifyCustomerCtrl'
  });
}])

.controller('ModifyCustomerCtrl', ['$scope', function($scope) {
    $scope.customers = [];
    
    for(var customer in localStorage){
        var newCustomer = JSON.parse(localStorage[customer]);
        $scope.customers.push(newCustomer);
    }
    
    $scope.deleteCustomer = function(index, customer){
        localStorage.removeItem('customer' + customer.id);
        $scope.customers.splice(index, 1);
    };
    
    $scope.onCustomerDelete = function(customer){
        $scope.customers.splice($scope.customers.indexOf(customer), 1);
    };
    
    $scope.editCustomer = function(customer){
        $scope.txtID = customer.id;
        $scope.txtName = customer.name;
        $scope.txtEmail = customer.email;
        $scope.txtPhone = customer.phone;
        $scope.txtStreet = customer.street;
        $scope.txtCity = customer.city;
        $scope.txtState = customer.state;
        $scope.txtZip = customer.zip;
    };
    
    $scope.updateCustomerData = function(){
        //localStorage.setItem(Ucustomer.name = $scope.txtName);
        var Upcustomer = {
            id : $scope.txtID,
            name : $scope.txtName,
            email : $scope.txtEmail,
            phone : $scope.txtPhone,
            street :$scope.txtStreet,
            city : $scope.txtCity,
            state : $scope.txtState,
            zip : $scope.txtZip
        };
        localStorage.setItem('customer' + parseInt($scope.txtID), JSON.stringify(Upcustomer));
        clearForm();
        location.reload();
    };
    
    var clearForm = function(){
        $scope.txtID = '';
        $scope.txtName = '';
        $scope.txtEmail = '';
        $scope.txtPhone = '';
        $scope.txtStreet = '';
        $scope.txtCity= '';
        $scope.txtState = '';
        $scope.txtZip= '';
    };
      
}]);
