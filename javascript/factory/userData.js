/**
 * Created by Siraj on 2016-02-13.
 */
myApp.factory('userData',function(){
    var user=[];
    return{
        setUser: setUser,
        getUser: getUser
    }
function setUser(u){
    user=u;
}
    function getUser(){
        return user;
    }
})