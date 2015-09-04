

angular.module("4cast", [ "kendo.directives", "wakanda", "ngRoute" ]).
controller("MyController", function($scope, $wakanda) {
      
     $wakanda.init().then(function oninit(ds) {
			 var projects = ds.project.$find();
			 $scope.customOptions.dataSource = new kendo.data.DataSource({
          		data: projects});

   	}); 
      
      
    $scope.customOptions = {
    	dataTextField: "projectName",
      	dataValueField: "projectNumber",
      	columns: [{ field: "projectNumber", title: "Number" },
      				{field: "projectName", title: "Name"}]
    };
  });



//app.config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//       .when('/index.html', {
//         templateUrl: 'views/projects.html',
//         controller: 'MyController'
//       });
//   }]);

