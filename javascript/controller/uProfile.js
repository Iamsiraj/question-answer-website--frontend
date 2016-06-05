/**
 * Created by Siraj on 2016-05-01.
 */
/**
 * Created by Siraj on 2016-01-31.
 */
myApp.controller('uprofileCtrl', function($scope,$rootScope,$location, $routeParams,$http,userData){
    // var user=userData.getUser();
  //  var user = JSON.parse(localStorage.getItem('userInfo'));
    var userID = $routeParams.uid;
   // $scope.user=user;

    $http.get('http://localhost:8000/uprofile/'+userID)
        .then(function(response){
            $scope.user = response.data.userData;
            console.log($scope.user);
        });
    $http.get('http://localhost:8000/userQues/'+userID)
            .then(function(response){
                $scope.userQuestions = response.data.quesData;
            });

    //
    //if(user){
    //    $http.get('http://localhost:8000/userQues/'+user._id)
    //        .then(function(response){
    //            $scope.userQuestions = response.data.quesData;
    //        });
    //
    //
    //
    //
    //
    //
    //
    //    console.log(user);
    //}else{
    //    $location.path('/login');
    //}
    //
    $scope.pageView=function(index,stringView){

        // $rootScope.index=index;
        $rootScope.qId = index._id;

        $location.path(stringView+ index._id);
        //$location.path('individualQues/123');

    }
    $scope.go=function(stringView){
        $location.path(stringView);
    }

});