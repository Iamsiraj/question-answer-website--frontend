/**
 * Created by Siraj on 2016-04-28.
 */
myApp.controller('editProfileCtrl', function($scope,$rootScope,$location, $http,userData){
    var user = JSON.parse(localStorage.getItem('userInfo'));
    console.log(user.name);
    $scope.go=function(){
        console.log($scope.name);
        $scope.name=user.name;
        $scope.email=user.email;
        $scope.password=user.password;

        var name=$scope.name;
        var email= $scope.email;
        var oldPassword = $scope.oldPassword;
        var newPassword = $scope.newPassword;
        if(newPassword==null){
            newPassword=oldPassword;
        }
        var education = $scope.education;
        var dob = $scope.dob;
        var about = $scope.about;
        // var user=userData.getUser();
    if(oldPassword==user.password){
        $http.post('http://localhost:8000/editProfile',{userId:user._id,name:name,email:email,oldPassword:oldPassword,newPassword:newPassword,education:education,dob:dob,about:about})
            .then(function(response){
                console.log(response.data);
            });
    }else{
        console.log("password does not match");
    }

    }






});