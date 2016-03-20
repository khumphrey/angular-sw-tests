app.config(function($stateProvider) {
    $stateProvider.state('albums', {
            url: '/albums',
            template: '<div> Hello you are in albums and {{ name }} controls you</div>',
            controller: function($scope) {
                $scope.name = "Khadija";
            }
        })
        .state('pony', {
            url: "/pony",
            template: "<div> Cool shit {{ place }} </div>",
            controller: function($scope) {
                $scope.place = "NYC";
            }
        });
});