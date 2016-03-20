app.config(function($stateProvider) {
    $stateProvider.state('albums', {
            url: '/albums',
            template: '<div> Hello you are in albums and {{ name }} controls you</div>',
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