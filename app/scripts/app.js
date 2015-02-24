'use strict';

/**
 * @ngdoc overview
 * @name mapsApp
 * @description
 * # mapsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('mapsApp', ['ngRoute', 'mapsControllers']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })

}]);
