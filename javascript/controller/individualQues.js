
myApp.controller('individualQues', function($scope,$rootScope,$location, $http,$routeParams){

 $scope.commentShow = false;
    var user = JSON.parse(localStorage.getItem('userInfo'));
    var questionID = $routeParams.questionID;
    var userId;
    $scope.user = user;
   // $http.post('http://localhost:8000/qViews/'+questionID);
    if (!user){
        $scope.button = true;
        $scope.postAns=true;
    }else{
        $scope.postAns=false;
        $scope.button=false;

    }
    $http.get('http://localhost:8000/individualQues/'+questionID).
        then(function(response){



            $scope.que=response.data.quesData;
          //  console.log($scope.que);
            userId=response.data.quesData.userId;
            console.log(userId);
            $http.get('http://localhost:8000/getAuthor/'+userId).
                then(function(response){
                    console.log('author k pass')



                    $scope.author=response.data.userData;


                });

        });

    $http.get('http://localhost:8000/getComments/'+questionID).
        then(function(response){



            $scope.Comments=response.data.commentData;

           $scope.userData = response.data.userName;
            console.log($scope.userData);
          //  var userName= []
            for (var c= 0 ;c <$scope.Comments.length ;c++){
                for (var j= 0 ; j<  $scope.userData.length ; j++){
                    if ($scope.Comments[c].userId ==  $scope.userData[j]._id ){
                        $scope.Comments[c].userName =  $scope.userData[j].name;
                      //  userName.push(users[j].name);

                    }

                }
            }

        });

    //$scope.getUser = function(id){
    //
    //          $http.get('http://localhost:8000/getUserName/' + id).
    //              then(function (response) {
    //
    //
    //                  $scope.userName = response.data.userData;
    //
    //
    //              });
    //      }





    $scope.addComment = function(){
        console.log("gaya")
        $scope.commentShow=true;
    };
    $scope.cancel = function(){
        $scope.commentShow=false;
    };

    $scope.qLike = function(){
        var queId = questionID;
        $http.post('http://localhost:8000/qLike/'+queId);
    };
    $scope.cLike = function(cId){
        var commentId = cId._id;
        $http.post('http://localhost:8000/cLike/'+commentId);
    };





    $scope.go= function (stringView) {
        $location.path(stringView);
    };
    $scope.go= function (c,stringView) {
        $location.path(stringView+ c.userId);
    };
    $scope.submitComment = function(){
        var user = JSON.parse(localStorage.getItem('userInfo'));
        var queId = questionID;
        var text = $scope.comment;

        $http.post('http://localhost:8000/addComment',{text:text,queId:queId,userId:user._id}).
        then (function(response){
            console.log(response);

        });
        $http.post('http://localhost:8000/qCommentNum/'+queId);

        $scope.Comments.push({text:text,queId:queId,userId:user._id});

    };



});