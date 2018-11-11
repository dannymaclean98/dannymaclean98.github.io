/**
 * Created by danny on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    $scope.page = new Page('coding', {
        url: 'assets/data/coding.json',
        itemName: 'project'
    });


    Position.all($http, $scope.page, function (positions) {
        $scope.page.items = positions;
    });
});
