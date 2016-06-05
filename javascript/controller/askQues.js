/**
 * Created by Siraj on 2016-02-14.
 */

myApp.controller('askQuesCtrl', function($scope,$rootScope,$location, $http , userData){
    console.log("agya");
$scope.submit=function(){
    var title=$scope.title;
    var tag= $scope.tags;
    var explanation = $scope.explanation;

    var user = JSON.parse(localStorage.getItem('userInfo'));

   $http.post('http://localhost:8000/postQues',{title:title,tag:tag,explanation:explanation,userId:user._id});
  //  $location.path('questions');
 //   $http.post('http://localhost:8000/postQues',{title:title,tag:tag,explanation:explanation});
}




});