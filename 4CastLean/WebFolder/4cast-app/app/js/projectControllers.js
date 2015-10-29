'use strict';

/* Controllers */

fourcastApp.controller('pController', function($scope, Restangular){
	var Project = Restangular.all('project');
	Project.getList().then(function(data){
		$scope.projects = data;
	});
});

fourcastApp.controller("projectsController", function($scope, $rootScope, $location, $stateParams, $state, $wakanda) {
	
	$wakanda.init().then(function oninit(ds) {
	
		
		$scope.projects = ds.project.$find({pageSize: 200});
		$scope.projects.$promise.then(function(){
			$scope.dataSource = new kendo.data.DataSource({
				pageSize: 20,
				data: $scope.projects
			});
			$scope.mainGridOptions.dataSource = $scope.dataSource;
				
		});
		
	});
	
	
	
	$scope.dataSource = new kendo.data.DataSource({

	    pageSize: 20,
	    data: $scope.projectsArray
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
	 		 	var selectedRows = this.select();
	 	var dataItem = this.dataItem(selectedRows[0]);
	 	var projectId = dataItem.id
	 	$scope.projectData = dataItem;
	 	$state.go('projects.detail', {projectId: projectId});
//	 	$rootScope.$apply(function() {
//	 	
//	 	        $location.path("/projects/detail/"+projectId);
//	 	        console.log($location.path());
//	 	      });
	 	                }
	
});

fourcastApp.controller('projectDetailController', function($scope, $rootScope, $stateParams, $state, $wakanda){
	debugger;
	
	var projectId = $stateParams.projectId;
	
	$scope.cancelDetail = function cancelDetail(){
		$state.go('projects.list');		
	}
	
	$wakanda.init('project').then(function oninit(ds) {	
		
		if(projectId==''){
			 $scope.project = $wakanda.$ds.project.$create();
		}
		else{
		
			$scope.project = ds.project.$findOne(projectId );
		
		};
				
		$scope.saveProject = function saveProject(){
			$scope.project.$save();
			$state.go('projects.list');		
		}
		
		});
		
	

});

