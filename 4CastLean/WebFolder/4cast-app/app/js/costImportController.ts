'use strict';

/* Subcontract Controllers */
var kendo:any;
var kendoConsole:any;

fourcastApp.controller('costImportsController', function($scope, $location, $state, $wakanda){

	setupImportsKendoOptions($scope);


	$wakanda.init().then(function oninit(ds) {
		debugger;
		$scope.ds = ds;

		$scope.costImportHeaders = ds.costImportHeader.$find({pageSize: 200,
    orderBy: 'batchDate desc'});

		$scope.costImportHeaders.$promise.then(function(){
			setupImportsList($scope, $scope.costImportHeaders);
				$state.go('costImports.list');
		});

	});

});



function setupImportsList($scope, list){
	$scope.importsArr = []
  debugger;
	for (var importHeader of list){

		var elem = {
			id: importHeader.id,
			batchDate: importHeader.batchDate,
			companyCode: importHeader.companyCode,
			description: importHeader.description

		}
		$scope.importsArr.push(elem);
	}

	$scope.dataSource = new kendo.data.DataSource({
		pageSize:20,
		data: $scope.importsArr});

	$scope.mainGridOptions.dataSource = $scope.dataSource;
}


function setupImportsKendoOptions($scope){
	$scope.dataSource = {};

		$scope.mainGridOptions = {
			dataSource: $scope.dataSource,

			sortable: true,
			selectable: true,
			pageable: {
			                   refresh: true,
			                   pageSizes: true,
			                   buttonCount: 5
			               },


		    columns: [{
		        field: "batchDate",
		        title: "Date"
		    }
		  ,

		  {
		         field: "companyCode",
		       	title: "Company/Division"
		  },

		  {
		        field: "description",
		       title: "Description"
		 },
		 	    ]
		};

}
