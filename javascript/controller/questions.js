
myApp.controller('questionsCtrl', function($scope,$rootScope,$location, $http){
$scope.noAns = false;
    $scope.recent=true;
    $http.get('http://localhost:8000/questions').
        then(function(response){
          //  console.log(response);
var qq = response.data.quesData;
         // $scope.questions= qq.slice(1,20);
          //  $scope.questions..substring(1,50)
          // console.log(response);
            $scope.questions =response.data.quesData;

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