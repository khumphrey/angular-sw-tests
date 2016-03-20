app.config(function($stateProvider) {
    $stateProvider.state('alternate', {
            url: '/alternate',
            template: '<div> Hello you are in an alternate Angular state and {{ name }} controls you</div>',
            controller: function($scope) {
                $scope.name = "Kate";
            }
        })
        .state('pony', {
            url: "/pony",
            templateUrl: "/angular/pony.template.html",
            controller: function($scope) {
                $scope.animal = "pony";
            }
        });
});