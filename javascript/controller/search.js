/**
 * Created by Siraj on 2016-04-30.
 */
/**
 * Created by Siraj on 2016-01-31.
 */
myApp.controller('searchCtrl', function($scope,$rootScope,$location, $http, $routeParams){

   var userSearch= $routeParams.userSearch;
    $http.get('http://localhost:8000/search/'+userSearch).
        then(function(response){



            $scope.questions=response.data.quesData;
           //  console.log($scope.qu);

        });


    $scope.pageView=function(index,stringView){

        // $rootScope.index=index;
        $rootScope.qId = index._id;

        $location.path(stringView+ index._id);
        //$location.path('individualQues/123');

    }
})