/**
 * Created by danny on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    $scope.page = new Page('coding', {
        itemName: 'position',
        url: 'assets/data/coding.json'
        
    });


    Position.all($http, $scope.page, function (positions) {
        $scope.page.items = positions;
    });
});
