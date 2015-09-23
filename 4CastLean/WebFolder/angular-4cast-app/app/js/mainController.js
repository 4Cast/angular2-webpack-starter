'use strict';

/* Controllers */

var fourcastApp = angular.module('fourcastApp', ["kendo.directives", "ui.router",  'restangular', 'wakanda']);



fourcastApp.controller('mainController', function($scope, $wakanda){

	$wakanda.init().then(function (ds) {
    // use the datastore 
	}); 

//	var project = $resource('http://127.0.0.1:8081/rest/project/:projectId.json',
//		{
//			projectId: '@id'
//		});
//		
//		project.get(function(resp){
//			var x = 1;
//			debugger;
//		}, function(err) {
//			var x = 1;
//			debugger;
//		});
//
});



fourcastApp.controller('controller', function ($scope, Restangular){

});

fourcastApp.config(function($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/');
 
  $stateProvider
    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects/projectsContainer.html'

    })
    
    $stateProvider
      .state('projects.list', {
        url: '/list',
        templateUrl: 'views/projects/projectsList.html',
        controller: 'projectsController'
      })
      
      $stateProvider
        .state('projects.detail', {
          url: '/detail/:projectId',
          templateUrl: 'views/projects/projectDetail.html',
          controller: 'projectDetailController'
        })
});

fourcastApp.config(function(RestangularProvider){

	RestangularProvider.setBaseUrl('http://127.0.0.1:8081/rest');
	RestangularProvider.setResponseInterceptor(
		function(data, operation, what){
			
			if(operation == 'getList'){
				
				var list = data["__ENTITIES"];
			
				return list;
			}
			
			return data;
		
		
		});

});

//fourcastApp.config(function($stateProvider, $urlRouterProvider) {
//    
//    $urlRouterProvider.otherwise('/');
//    
//    $stateProvider
//        
//        // HOME STATES AND NESTED VIEWS ========================================
//        .state('home', {
//            url: '/',
//            templateUrl: 'app/views/projects/projectsContainer.html'
//        })
//        
//        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
//        .state('about', {
//            // we'll get to this in a bit       
//        })
//        
//        .state('home.list', {
//               url: '/list',
//               templateUrl: 'views/projects/projectsList.html',
//               controller: "projectsController"})
//        
//                 
//           .state('home.paragraph', {
//                  url: '/paragraph',
//                  templateUrl: 'app/views/projects/projectDetail.html'
//                  
//              })
//           
//        
//});