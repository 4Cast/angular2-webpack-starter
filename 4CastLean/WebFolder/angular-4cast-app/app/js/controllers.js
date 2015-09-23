'use strict';

/* Controllers */

fourcastApp.controller('pController', function($scope, Restangular){
	var Project = Restangular.all('project');
	Project.getList().then(function(data){
		$scope.projects = data;
	});
});

fourcastApp.controller("projectsController", function($scope, $rootScope, $location, $http, Restangular, $wakanda) {
	
	$wakanda.init().then(function oninit(ds) {
		
		$scope.projects = ds.project.$find();
		$scope.projects.$promise.then(function(){
			$scope.dataSource = new kendo.data.DataSource({
				pageSize: 20,
				data: $scope.projects
			});
			debugger;
			var grid = $('#grid').data('kendoGrid');
			if(grid){
				grid.setDataSource($scope.dataSource);
			}
			
		});
		
	});
	
	
//	var Project = Restangular.all('project');
//	
//	Project.getList().then(function(data){
//		$scope.projects = data;
////		$scope.dataSource = new kendo.data.DataSource({
////			pageSize: 20,
////			data: $scope.projects
////		})

//		//$scope.projectsArray = [{projectName: "Two", projectNumber: 2}];
//		//debugger;
//		$scope.dataSource = new kendo.data.DataSource({
//			pageSize: 20,
//			data: $scope.projects
//			});
//			debugger;
//		var grid = $('#grid').data('kendoGrid');
//		grid.setDataSource($scope.dataSource);
//		
//	});
	
//	$scope.greeting = "Hello Chris";
//	$scope.projects = {};
//	$scope.projects.__ENTITIES = [];
//	//$scope.rProjects = Restangular.all('project').getList();
//	$http.get('http://127.0.0.1:8081/rest/project?$top=200').success(function(data) {
//	   
//	   $scope.projects = data;
//	 });
	
	$scope.dataSource = new kendo.data.DataSource({
//	   transport: {
//	       read: {
//	           url: 'http://127.0.0.1:8081/rest/project?$top=200',
//	           dataType: "json"
//	       }
//	   },
	    pageSize: 20,
	    data: $scope.projectsArray//	    schema: {
//	    	data: "__ENTITIES"
//	    }
	})
	

	$scope.mainGridOptions = {
		dataSource: $scope.dataSource,
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
	 	var selectedRows = this.select();
	 	var dataItem = this.dataItem(selectedRows[0]);
	 	var projectId = dataItem.id
	 	$scope.projectData = dataItem;
	 	$rootScope.$apply(function() {
	 	
	 	        $location.path("/projects/detail/"+projectId);
	 	        console.log($location.path());
	 	      });
	 	                }
	
});

fourcastApp.controller('projectDetailController', function($scope, $http, $stateParams){
	debugger;
	
	$scope.projectId = $stateParams.projectId;
	$http.get('http://127.0.0.1:8081/rest/project('+$scope.projectId+')').success(function(data) {
	   debugger;
	   $scope.project = data;
	 });
});





//fourcastApp.config(function($routeProvider, $locationProvider) {
//	
//	$locationProvider.html5Mode(true);
//
//    $routeProvider
//    	.when('/app', {
//        templateUrl: "/app/views/projects/projectsList.html",
//        controller: "projectsController"
//        
//    	})
//    	.when('/index.html', {
//    	templateUrl: "/app/views/projects/projectsList.html",
//    	controller: "projectsController"
//    	
//    	})
//    	.when('/app/new', {
//    		templateUrl: "/app/views/projects/projectDetail.html",
//    		controller: "detailController"
//    	})
//    	.otherwise({
//    		template: "<div><h2>Not found</h2></div>"
//    	});	
//});

//fourcastApp.controller('PhoneListCtrl', function($scope) {
//  $scope.phones = [
//    {'name': 'Nexus S', 
//     'snippet': 'Fast just got faster with Nexus S.'},
//    {'name': 'Motorola XOOM™ with Wi-Fi',
//     'snippet': 'The Next, Next Generation tablet.'},
//    {'name': 'MOTOROLA XOOM™',
//     'snippet': 'The Next, Next Generation tablet.'}
//  
//  ];
//});
