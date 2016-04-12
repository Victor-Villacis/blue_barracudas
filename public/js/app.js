var app = angular.module('mainApp', ['ui.router']);

app.controller('mainController', function($scope, $rootScope){

});

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {


$locationProvider.html5Mode({
     enabled: true,
     requireBase: false
   });

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/main.html",
      controller: "mainController"
    })
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: "authController"
    })
    .state('register', {
      url: "/register",
      templateUrl: "partials/register.html",
      controller: "authController"
    })
    .state('searchform', {
      url: "/search",
      templateUrl: "partials/searchform.html",
      controller: "searchController"

    })

    .state('map', {
      url: "/map",
      templateUrl: "partials/map.html",
      controller: "authController"
    });


    $locationProvider.html5Mode({
   enabled: true,
   requireBase: false
 });


});

app.controller('searchController', function($scope, $rootScope){
})
