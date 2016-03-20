var app = angular.module('simple', ['ui.router']);
// app.config(function($urlRouterProvider, $locationProvide) {
//     // This turns off hashbang urls (/#about) and changes it to something normal (/about)
//     $locationProvider.html5Mode(true);
//     // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
//     $urlRouterProvider.otherwise('/');
// });
app.controller('main', function($scope, $state) {
    $scope.working = 'This was added via Angular!!';
    $scope.reset = function() {
    	console.log('SW is being reset');
        // Let's register our serviceworker
        navigator.serviceWorker.getRegistration('../').then(function(reg) {
                console.log('Unregistering ServiceWorker');
                return reg && reg.unregister();
            })
            .then(function(reg) {
                console.log('Clearing caches');
                return navigator.serviceWorker.register('clear.js', {
                    scope: './'
                });
            })
            .then(function(reg) {
                reg.addEventListener('updatefound', function() {
                    var installing = reg.installing;
                    reg.installing.addEventListener('statechange', function() {
                        if (installing.state == 'installed') {
                            console.log('Done!');
                            reg.unregister();
                            window.document.location.reload(true);
                        }
                    });
                });
            });
    };

});