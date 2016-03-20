var app = angular.module('simple', ['ui.router']);
// app.config(function($urlRouterProvider, $locationProvide) {
//     // This turns off hashbang urls (/#about) and changes it to something normal (/about)
//     $locationProvider.html5Mode(true);
//     // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
//     $urlRouterProvider.otherwise('/');
// });
app.controller('main', function($scope, $state) {
    $scope.working = 'YESSSSSSS';
    $scope.ponyGo = function() {
        $state.go('pony');
    };
});