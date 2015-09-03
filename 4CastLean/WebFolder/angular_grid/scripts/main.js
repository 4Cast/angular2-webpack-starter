//  var app = angular.module("KendoDemos", [ "kendo.directives", "wakanda" ]);
//      
//	app.controller("MyController", function ($scope, $wakanda) {
//   		$scope.loaded = !!$wakanda ? 'loaded' : 'not loaded';
//		$scope.initialized = 'not initialized';
//	

//		
//		$wakanda.init().then(function oninit(ds) {

//	 		$scope.initialized = 'initialized';
//	        // feed the angular scope with the stored data of the Country DataClass
//	        $scope.projects = ds.project.$find();
//			
//			 $scope.gridOptions.dataSource = new kendo.data.DataSource({
//          		data: $scope.projects});

//   		 	});

//		$scope.gridOptions = {
//     			
//      			columns: { field: "projectNumber", title: "Number" }
//   			 };
// 		
//		
//		
//		

//	});

//		var projectsDataSource = new kendo.data.DataSource({
//                       data: $scope.projects
//                        }
//                    );


angular.module("KendoDemos", [ "kendo.directives", "wakanda" ]).controller("MyController", function($scope, $wakanda) {
//    $http({method: "GET", url: "./products.xml"})
//      .success(function(result){
//        $scope.customOptions.dataSource = new kendo.data.DataSource({
//        	
//          data: result.d
//        });
//      });
      
      
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