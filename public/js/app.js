// Declare app level module which depends on filters, and services
angular.module('momentr',['momentr.filters', 'momentr.services', 'momentr.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'snip/index',
        controller: IndexCtrl
      }).
      when('/explore', {
        templateUrl: 'snip/explore',
        controller: exploreCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);


function IndexCtrl($scope, $http) {
 alert('blah');
 return true;
}
function exploreCtrl($scope, $http, $location, $routeParams){
   $http.get('/api/imgs').
      success(function(data, status, headers, config) {
            $scope.imgs = data.imgs;
   });
}



