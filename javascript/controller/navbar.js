/**
 * Created by Siraj on 2016-01-31.
 */
/**
 * Created by Siraj on 2016-01-31.
 */
myApp.controller('navCtrl', function($scope,$rootScope,$location, $http,userData){
    var user = JSON.parse(localStorage.getItem('userInfo'));
    if (user){
        $scope.login = $rootScope.login=false;

        $scope.profile=true;
    $scope.signup=false;
        $scope.logout1 = $rootScope.logout1=true;

    //var user =userData.getUser();
    //console.log(user);
    //if (user==null){
    //    console.log("user null hai")
    //    $scope.login=true;
    //    $scope.profile=false;
    //    $scope.signup=true;
    //}else{
    //
    //}
    } else{
        $scope.profile=false;
        $rootScope.login=true;
        $scope.signup=true;
        $rootScope.logout1=false;


    }

    $scope.go= function (stringView) {
        $location.path(stringView);
    }
    $scope.logout = function(stringView){
        console.log("idhar logout")
        localStorage.clear();
        $location.path(stringView);
    }
    $scope.search1 = function(stringView){
       var userSearch = $scope.search;
       // console.log(userSearch);
        $location.path(stringView+userSearch);
    }
});