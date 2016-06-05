/**
 * Created by Siraj on 2016-01-31.
 */
myApp.controller('homeCtrl', function($scope,$rootScope,$location, $http){
    console.log("helllo");
    $scope.go= function (stringView) {
        $location.path(stringView);
    }
    $scope.catGo= function (stringView,cat) {
        $location.path(stringView+cat);
    }



})