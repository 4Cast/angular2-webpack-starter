
'use strict';

var kendo;

var kendoConsole;

fourcastApp.controller('subcontractContainerController', function ($scope, $location, $state, $wakanda) {

    setupKendoOptions($scope);

    $wakanda.init().then(function oninit(ds) {

        debugger;

        $scope.ds = ds;

        $scope.projects = ds.project.$find({ pageSize: 200 });

        $scope.subcontracts = ds.scnt.$find({ pageSize: 200 });

        $scope.subcontracts.$promise.then(function () {

            setupSubcontractsList($scope, $scope.subcontracts);

            $state.go('subcontracts.list');

        });

    });

});

fourcastApp.controller("subcontractsController", function ($scope, $rootScope, $location, $state, $wakanda) {

    debugger;

    $scope.selectForProject = function selectForProject(theProject) {

        $scope.theProject = theProject;

        $scope.theProject.subcontracts.$fetch().then(function () {

            setupSubcontractsList($scope, $scope.theProject.subcontracts);

        });

    };

    $scope.onChange = function onChange(theGrid) {

        debugger;

        var selectedRows = theGrid.select();

        var dataItem = theGrid.dataItem(selectedRows[0]);

        var subcontractId = dataItem.id;

        $scope.subcontractData = dataItem;

        $state.go('^.detail', { subcontractId: subcontractId });

    };

    function onDataBound(arg) {

        debugger;

        kendoConsole.log("Grid data bound");

    }

});

fourcastApp.controller('subcontractDetailController', function ($scope, $rootScope, $stateParams, $state, $wakanda) {

    debugger;

    var id = $stateParams.subcontractId;

    $scope.cancelDetail = function cancelDetail() {

        $state.go('^.list');

    };

    $wakanda.init('scnt').then(function oninit(ds) {

        if (id == '' || !id) {

            $scope.scnt = $wakanda.$ds.scnt.$create();

        }

        else {

            $scope.scnt = ds.scnt.$findOne(id);

        }

        ;

        $scope.saveProject = function saveProject() {

            $scope.project.$save();

            $state.go('projects.list');

        };

    });

});

function setupSubcontractsList($scope, list) {

    $scope.subcontractsArr = [];

    for (var _i = 0; _i < list.length; _i++) {

        var subcontract = list[_i];

        var elem = {

            id: subcontract.id,

            subcontractNumber: subcontract.subcontractNumber,

            dateContract: subcontract.dateContract,

            supplierName: subcontract.supplierName

        };

        $scope.subcontractsArr.push(elem);

    }

    $scope.dataSource = new kendo.data.DataSource({

        pageSize: 20,

        data: $scope.subcontractsArr });

    $scope.mainGridOptions.dataSource = $scope.dataSource;

}

function doOnChange(e) {

    debugger;

    var scope = e.sender.$angular_scope;

    scope.onChange(this);

}

function setupKendoOptions($scope) {

    $scope.dataSource = {};

    $scope.mainGridOptions = {

        dataSource: $scope.dataSource,

        change: doOnChange,

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

            },

            {

                field: "supplierName",

                title: "Supplier"

            },

            {

                field: "dateContract",

                title: "Contract Date"

            },

        ]

    };

}

