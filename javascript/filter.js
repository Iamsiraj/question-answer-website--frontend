/**
 * Created by Siraj on 2016-04-17.
 */
angular.module('questionFilter', []).filter('topPosts',function(){
   return function(input,string){
       var newArray= [];
       for (var i = 0 ; i<input.length ; i++){
           if (input[i].likes > 2){
               newArray.push(input[i]);
           }
       }
       return newArray;
   }
});