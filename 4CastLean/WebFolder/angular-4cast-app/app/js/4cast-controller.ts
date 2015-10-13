'use strict';


/// <reference path="../bower_components/angular-ui-router/api/angular-ui-router.d.ts"/>

var angular:any;
var kendo:any;


 var myApp = angular.module("myApp", ["kendo.directives", "ngRoute"])


//             myApp.controller("MyController", function($scope, $http) {
//
//                $scope.greeting = "Hello Christopher";
//
//                $http.get('http://127.0.0.1:8081/rest/project?$top=200').success(function(data) {
//
//                    $scope.projects = data.__ENTITIES;
//                  });
//
//                 $wakanda.init().then(function oninit(ds) {
//                                   $scope.projects = ds.project.$find({pageSize: 200});
//
//                                });
//
//            });

             myApp.controller("projectsController", function($scope, $rootScope, $location) {

				$scope.greeting = "Hello Chris";


                $scope.customOptions = {
                	dataSource: new kendo.data.DataSource({
                	   transport: {
                	       read: {
                	           url: 'http://127.0.0.1:8081/rest/project?$top=200',
                	           dataType: "json"
                	       }
                	   },
                	    pageSize: 40,
                	    schema: {
                	    	data: "__ENTITIES"
                	    }
                	}),
                	change: onChange,
                	sortable: true,
                	selectable: true,
                	pageable: {
                	                   refresh: true,
                	                   pageSizes: true,
                	                   buttonCount: 5
                	               },
                    dataTextField: "projectName",
                    dataValueField: "projectNumber",
                    columns: [{
                        field: "projectNumber",
                        title: "Number"
                    }, {
                        field: "projectName",
                        title: "Name"
                    }]
                };

               function onChange(e){
                	var x = 1;
                	debugger;
                	$rootScope.$apply(function() {

                	        $location.path("/app/new");
                	        console.log($location.path());
                	      });
                	                }

            });

            myApp.controller("detailController", function($scope,  $location){

            	$scope.newProject = { };
            	$scope.save = function(newProject){

//            		var newEntity = $wakanda.$ds.project.$create(newProject);
//            		debugger;
//            		newEntity.$save().then(function(e){
//            		            $scope.projects = $wakanda.$ds.project.$find({pageSize: 200});
//            		        });
//            		//$scope.projects.push($scope.project);
//            		$location.path("/app")
            	}

            });

            myApp.config(function($routeProvider, $locationProvider) {

            	$locationProvider.html5Mode(true);

                $routeProvider
                	.when('/app', {
                    templateUrl: "/app/views/projects/projectsList.html",
                    controller: "projectsController"

                	})
                	.when('/index.html', {
                	templateUrl: "/app/views/projects/projectsList.html",
                	controller: "projectsController"

                	})
                	.when('/app/new', {
                		templateUrl: "/app/views/projects/projectDetail.html",
                		controller: "detailController"
                	})
                	.otherwise({
                		template: "<div><h2>Not found</h2></div>"
                	});
            });
