/**
 * Created by Siraj on 2016-01-31.
 */
myApp.controller('loginCtrl', function($scope,$rootScope,$location, $http,userData){
//$http.get('http://localhost:8000/test/')
//    .then(function(response){
//      console.log(response.data.userName);
//    })

















    $scope.login=function(){
        $scope.login=false;
        $scope.email;
        $scope.password;
        $http.post('http://localhost:8000/login',{email:$scope.email,password:$scope.password})
            .then(function(response){
                console.log(response)
                if(response.data.status==200){
                    console.log("logged in");
                    console.log(response.data.user);
                    $location.path("profile");
                    userData.setUser(response.data.user);
                    localStorage.setItem('userInfo',JSON.stringify(response.data.user));

                }else{
                    console.log("email or password incorrect");
                }
            })

    }

})