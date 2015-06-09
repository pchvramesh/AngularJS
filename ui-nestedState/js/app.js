/**
 * Created by WebApp on 2/25/2015.
 */
"use strict";

angular.module('testApp', [
    'ui.router'
]).config(["$urlRouterProvider","$stateProvider",function(a,b) {
    a.otherwise('/login')
    b.state("app", {
        url: '/login',
        views: {
            '@' : {
                templateUrl: 'views/app.html',
                controller: 'IndexCtrl'
            },
            'brand@app' : { templateUrl: 'views/brand.html'},
            'login@app' : { templateUrl: 'views/login.html'}
        }
    })
    b.state('app.signup',{
        url:"/signup",
        'brand@app' : { templateUrl: 'views/brand.html'},
        'login@app' : { templateUrl: 'views/signup.html'}
    })
}]).controller('IndexCtrl',function(){
    console.log('Index Controller');
})
