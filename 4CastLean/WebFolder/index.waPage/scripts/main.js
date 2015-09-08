

//angular.module("4cast", [])
//"kendo.directives", "wakanda", "ngRoute" 
//controller("MyController", function($scope, $wakanda) {
//      
//     $wakanda.init().then(function oninit(ds) {
//			 var projects = ds.project.$find();
//			 $scope.customOptions.dataSource = new kendo.data.DataSource({
//          		data: projects});

//   	}); 
//      
//      
//    $scope.customOptions = {
//    	dataTextField: "projectName",
//      	dataValueField: "projectNumber",
//      	columns: [{ field: "projectNumber", title: "Number" },
//      				{field: "projectName", title: "Name"}]
//    };
//  });



//app.config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//       .when('/index.html', {
//         templateUrl: 'views/projects.html',
//         controller: 'MyController'
//       });
//   }]);



 var app = angular.module("myApp", ["kendo.directives", "wakanda", "ngRoute" 	 	])


             app.controller("MyController", function($scope, $wakanda) {

                $scope.greeting = "Bonjour";               
                
                 $wakanda.init().then(function oninit(ds) {
                                    $scope.projects = ds.project.$find();
                                    $scope.customOptions.dataSource = new kendo.data.DataSource({
                                        data: $scope.projects
                                    });
                
                                });
                
            });
            
             app.controller("projectsController", function($scope, $wakanda, $location) {               
				
				$scope.greeting = "Hello";
								
                $scope.customOptions = {
                	dataSource: new kendo.data.DataSource({
                	    data: $scope.projects
                	}),
                	
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
                
                
            });
            
            app.controller("detailController", function($scope, $location){
            	$scope.project = {projectName:"", projectNumber:""}
            	
            	$scope.save = function(){
            		$scope.projects.push($scope.project);
            		$location.path("/")
            	}
            
            });

            app.config(function($routeProvider, $locationProvider) {
            	
            	$locationProvider.html5Mode(true);
            
                $routeProvider
                	.when('/', {
                    templateUrl: "/views/projects/projectsList.html",
                    controller: "projectsController"
                    
                	})
                	.when('/new', {
                		templateUrl: "/views/projects/projectDetail.html",
                		controller: "detailController"
                	})
                	.otherwise({
                		template: "<div><h2>Otherwise</h2></div>"
                	});	
            });

