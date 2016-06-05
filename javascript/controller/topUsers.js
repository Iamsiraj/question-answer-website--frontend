/**
 * Created by Siraj on 2016-05-02.
 */

myApp.controller('topUsersCtrl', function($scope,$rootScope,$location, $http){
    $scope.noAns = false;
    $scope.recent=true;
    $http.get('http://localhost:8000/topUsers').
        then(function(response){
            //  console.log(response);
            var qq = response.data.userData;
            // $scope.questions= qq.slice(1,20);
            //  $scope.questions..substring(1,50)
            // console.log(response);
            $scope.questions =response.data.userData;

        });


    $scope.pageView=function(index,stringView){

        // $rootScope.index=index;
        $rootScope.qId = index._id;

        $location.path(stringView+ index._id);
        //$location.path('individualQues/123');

    }

    $scope.go = function(string){
        if (string=="noAns"){
            $scope.noAns = true;
            $scope.recent = false;

        }else{
            $scope.noAns = false;
            $scope.recent = true;


        }

    }




})