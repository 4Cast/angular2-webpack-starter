'use strict';

/* Subcontract Controllers */

fourcastApp.controller("subcontractsController", function($scope, $rootScope, $location, $state, $wakanda) {
	debugger;
	$wakanda.init().then(function oninit(ds) {
	
		$scope.ds = ds;
		$scope.projects = ds.project.$find({pageSize: 200});		
		$scope.subcontracts = ds.scnt.$find({pageSize: 200});
		$scope.subcontracts.$promise.then(function(){
			$scope.dataSource = new kendo.data.DataSource({
				pageSize: 20,
				data: $scope.subcontracts
			});
			$scope.mainGridOptions.dataSource = $scope.dataSource;
				
		});
		
		$scope.selectForProject = function selectForProject(e){
				debugger;
				//$state.go('projects.list');		
			}
		
		
	});
		
			
	$scope.dataSource = {};
	
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

	   
	    columns: [{
	        field: "subcontractNumber",
	        title: "Number"
	    }
	  , {
	        field: "dateContract",
	       title: "Contract Date"
	 }
	    ]
	};
	function onChange(e){
	 	var x = 1;
	 		 	var selectedRows = this.select();
	 	var dataItem = this.dataItem(selectedRows[0]);
	 	var subcontractId = dataItem.id
	 	$scope.subcontractData = dataItem;
	 	$state.go('subcontracts.detail', {subcontractId: subcontractId});
//	 	$rootScope.$apply(function() {
//	 	
//	 	        $location.path("/projects/detail/"+projectId);
//	 	        console.log($location.path());
//	 	      });
	 	                }
	
});

fourcastApp.controller('subcontractDetailController', function($scope, $rootScope, $stateParams, $state, $wakanda){
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

