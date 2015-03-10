/**
 * Created by WebApp on 2/25/2015.
 */
"use strict";
var TestApp = angular.module("testApp",["ui.router"]).config(["$urlRouterProvider","$stateProvider",function(a,b) {
    b.state("login", {
        url: "/login",
        title: "Login",
        templateUrl: "views/test.html"
    })
    a.otherwise('/login');
}]);