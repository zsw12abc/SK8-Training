var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'pages/index.html'
                },
                'topbar@index': {
                    templateUrl: 'pages/topbar.html'
                },
                'main@index': {
                    templateUrl: 'pages/home.html'
                }
            }
        })
        .state('index.os', {
            url: '/os',
            views: {
                'main@index': {
                    templateUrl: 'pages/os.html',
                    controller: 'mainController'
                }
            }
        })
        .state('index.about', {
            url: '/about',
            views: {
                'main@index': {
                    url: '/about',
            templateUrl: 'pages/about.html'
                }
            }
        })
        .state('index.contact', {
            url: '/contact',
            views: {
                'main@index': {
                    url: '/contact',
            templateUrl: 'pages/contact.html'
                }
            }
        })
        .state('index.settings', {
            url: '/settings',
            views: {
                'main@index': {
                    template: '这里是系统设置'
                }
            }
        })
});

routerApp.controller('mainController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
    $scope.orderProp = 'age';
}]);

routerApp.directive('phoneShow', function() {
  return {
	  restrict: 'ACEM',
	  templateUrl: 'pages/phoneShow.html'
//     template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});