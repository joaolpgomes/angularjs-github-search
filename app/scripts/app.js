'use strict';

// Module   
angular.module('githubApp', [
    'ngRoute',
    'angular-loading-bar',
    'nvd3'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {});
}]);
