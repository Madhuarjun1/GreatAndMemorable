'use strict';

var pocApp = angular.module('pocApp', ['ui.router', 'ui.bootstrap', 'pocApp.controllers', 'pocApp.services', 'pocApp.directives']);


	pocApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/');
 
    $stateProvider
	    .state('changepassword', {
            url:'/changepassword',
            templateUrl: 'partials/changepassword.html',
            controller: 'homeController'
        })
        .state('createuser', {
            url:'/createuser',
            templateUrl: 'partials/user.html', 
            controller: 'userController'
        }).state('searchpro', {
   		 url:'/searchpro',
         templateUrl: 'partials/SearchProject.html', 
         controller: 'SearchController'
	})
        
        .state('creategroup', {
            url:'/creategroup',
            templateUrl: 'partials/group.html', 
            controller: 'groupController'
        })	.state('shopreport', {
    		 url:'/report',
             templateUrl: 'partials/report.html', 
             controller: 'shopController'
    	});
        
}]);
	