myApp.controller('signupCtrl', function($scope,$rootScope,$location, $http){
    $scope.submit=function(){
        var name=$scope.name;
        var email= $scope.email;
        var password = $scope.password;
        var confromPassword = $scope.confirmPassword;
       // var user=userData.getUser();

        if (password==confromPassword) {

            $http.post('http://localhost:8000/register', {name: name, email: email, password: password})
                .then(function (response) {
                    console.log(response.data);
                });
        }else{
            console.log("Password Not Matched");
        }

    }



})