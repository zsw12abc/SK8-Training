var myApp = angular.module('MyApp', ['ngRoute']);
 

myApp.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
 
        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
 
        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});
 
myApp.controller('mainController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

 
myApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});
 
myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

myApp.directive("productCell", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl : 'pages/product.html',
//         controller: 'mainController'
    }
});
