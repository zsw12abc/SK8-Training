var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls3/index.html'
                },
                'topbar@index': {
                    templateUrl: 'tpls3/topbar.html'
                },
                'main@index': {
                    templateUrl: 'tpls3/home.html'
                }
            }
        })
        .state('index.os', {
            url: '/os',
            views: {
                'main@index': {
                    templateUrl: 'tpls3/os.html',
//                     templateUrl: 'tpls3/usermng.html',
                    controller: 'mainController'
/*
                    function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("index.usermng.addusertype");
                        }
                    }
*/
                }
            }
        })
        .state('index.usermng.highendusers', {
            url: '/highendusers',
            templateUrl: 'tpls3/highendusers.html'
        })
        .state('index.usermng.normalusers', {
            url: '/normalusers',
            templateUrl: 'tpls3/normalusers.html'
        })
        .state('index.usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'tpls3/lowusers.html'
        })
        .state('index.usermng.addusertype', {
            url: '/addusertype',
            templateUrl: 'tpls3/addusertypeform.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('index.about', {
            url: '/about',
            views: {
                'main@index': {
                    url: '/about',
            templateUrl: 'tpls3/about.html'
                }
            }
        })
        .state('index.contact', {
            url: '/contact',
            views: {
                'main@index': {
                    url: '/contact',
            templateUrl: 'tpls3/contact.html'
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
