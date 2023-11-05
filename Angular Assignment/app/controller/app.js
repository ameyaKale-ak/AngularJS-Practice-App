var myapp=angular.module('myapp',['ngRoute']);

myapp.directive('myDirective',[function(){
    return{
        restrict : 'E',
        scope : {
            shows:'=',
            title:'='
        },
        templateUrl :'',
        transclude :true,
        replace :true,
        controller :function($scope){
            $scope.random = Math.floor(Math.random()* 9)
        }
    }
}]);

myapp.config(['$routeProvider',function($routeProvider){

    $routeProvider
                 .when('/home',{
                     templateUrl :'../views/homeview.html',
                     controller : 'mycontroller'
                 })
                 .when('/contactUs',{
                     templateUrl :'../views/contactview.html'
                 })
                 .when('/product',{
                    templateUrl :'../views/productview.html',
                    controller : 'mycontroller'
                 })
                 .otherwise({
                     redirectTo:'/home'
                 });
}]);

// myapp.directive('myDirective',[function(){
//     return{
//         restrict : 'E',
//         scope : {
//             data2:'=',
//             title:'='
//         },
//         template:'{{title}}',
//         controller :function($scope){

//         }
//     };
// }]);

/*controller with http service */
myapp.controller('mycontroller',['$scope','$http',function($scope,$http){


    $http.get('../data/data1.json').then(function(response){
        $scope.data1=response.data;
    });

    $http.get('../data/data2.json').then(function(response){
        $scope.data2=response.data;
    });

}]);



