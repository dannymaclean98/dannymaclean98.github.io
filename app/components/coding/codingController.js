/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    $scope.page = new Page('coding', {
        url: 'https://github.com/dannymaclean98',
        itemName: 'project'
    });

    var ignored_repos = ["Blog", "Oh my zsh", "Awesome options", "Originpy", "PantherBot"];

    Project.all($http, $scope.page, function (projects) {
        $scope.page.items = projects.exclude(function (value) {
            return ignored_repos.contains(value.title);
        });
    });

});
