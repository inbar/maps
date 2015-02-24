'use strict';

/**
 * @ngdoc function
 * @name mapsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapsApp
 */
angular.module('mapsControllers', [])
  .controller('MainCtrl', function ($scope) {
    // Provide your access token
    L.mapbox.accessToken = 'pk.eyJ1IjoiaW5iYXJkYSIsImEiOiJoUTlLWjFFIn0.qY3BaCuB4zMSGuCd4kWoBQ';
    // Create a map in the div #map
    var map = L.mapbox.map('map', 'inbarda.la177n3d')
      .setView([1.175, 107.622], 6);

    L.marker([3.144,101.708], {
      title: 'KL'
    }).addTo(map);
  });
