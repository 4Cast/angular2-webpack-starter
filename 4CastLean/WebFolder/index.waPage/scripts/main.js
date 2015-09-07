

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



 var app = angular.module("myApp", ["kendo.directives", "wakanda", "ngRoute"])


             app.controller("MyController", function($scope) {

                $scope.greeting = "Bonjour";
                $scope.path = "We are here";
                
            });
            
             app.controller("projectsController", function($scope, $wakanda) {

                $scope.greeting = "Bonjour";
                $scope.path = "We are here";

                $wakanda.init().then(function oninit(ds) {
                    var projects = ds.project.$find();
                    $scope.customOptions.dataSource = new kendo.data.DataSource({
                        data: projects
                    });

                });

                $scope.customOptions = {
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

            app.config(['$routeProvider', function($routeProvider) {
                $routeProvider
                	.when('/', {
                    templateUrl: "views/projects/projectsList.html",
                    controller: "projectsController"
                    
                	})
                	.otherwise({
                		template: "<div><h2>Otherwise</h2></div>"
                	});	
            }]);

