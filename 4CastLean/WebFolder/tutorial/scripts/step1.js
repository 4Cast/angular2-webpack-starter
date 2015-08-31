

var app = angular.module('step1', ['wakanda'])

app.controller('Controller', function ($scope, $wakanda) {
   $scope.loaded = !!$wakanda ? 'loaded' : 'not loaded';
});
