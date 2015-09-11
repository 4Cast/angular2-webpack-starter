

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



 var app = angular.module("myApp", ["kendo.directives", "ngRoute" 	 	])


             app.controller("MyController", function($scope, $http) {

                $scope.greeting = "Bonjour";  
                
                $http.get('http://127.0.0.1:8081/rest/project?$top=200').success(function(data) {
                	debugger;
                    $scope.projects = data.__ENTITIES;
                  });             
                
//                 $wakanda.init().then(function oninit(ds) {
//                                   $scope.projects = ds.project.$find({pageSize: 200});
//                                                
//                                });
                
            });
            
             app.controller("projectsController", function($scope, $location) {               
				
				$scope.greeting = "Hello";
			
								
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
                
                	$location.path("/new");              
                }
                
            });
            
            app.controller("detailController", function($scope,  $location){
            	
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

            app.config(function($routeProvider, $locationProvider) {
            	
            	$locationProvider.html5Mode(true);
            
                $routeProvider
                	.when('/app', {
                    templateUrl: "/views/projects/projectsList.html",
                    controller: "projectsController"
                    
                	})
                	.when('/index.html', {
                	templateUrl: "/views/projects/projectsList.html",
                	controller: "projectsController"
                	
                	})
                	.when('/app/new', {
                		templateUrl: "/views/projects/projectDetail.html",
                		controller: "detailController"
                	})
                	.otherwise({
                		template: "<div><h2>Not found</h2></div>"
                	});	
            });

