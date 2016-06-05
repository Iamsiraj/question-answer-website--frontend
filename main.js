/**
 * Created by Siraj on 2016-01-31.
 */
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'templates/home.html',
            controller:'questionsCtrl'
        })
        .when('/profile',{
            templateUrl:'templates/profile.html',
            controller:'profileCtrl'
        })
        .when('/signup',{
            templateUrl:'templates/signup.html',
            controller:'signupCtrl'
        })
        .when('/home',{
            templateUrl:'templates/home.html',
            controller:'homeCtrl'
        })

        .when('/login',{
            templateUrl:'templates/login.html',
            controller:'loginCtrl'
        })
        .when('/questions',{
            templateUrl:'templates/questions.html',
            controller:'questionsCtrl'
        })
        .when('/individualQues/:questionID',{
            templateUrl:'templates/individualQues.html',
            controller:'individualQues'
        })
        .when('/askQues',{
            templateUrl:'templates/ask_question.html',
            controller:'askQuesCtrl'
        })
        .when('/edit_profile',{
            templateUrl:'templates/edit_profile.html',
            controller:'editProfileCtrl'
        })
        .when('/search/:userSearch',{
            templateUrl:'templates/search.html',
            controller:'searchCtrl'
        })
        .when('/uprofile/:uid',{
            templateUrl:'templates/uprofile.html',
            controller:'uprofileCtrl'
        })
        .when('/topUsers/',{
            templateUrl:'templates/topUsers.html',
            controller:'topUsersCtrl'
        })






        .otherwise({
            redirect:'/'
        })


}])