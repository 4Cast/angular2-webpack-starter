'use strict';
var angular;
var fourcastApp = angular.module('fourcastApp', ["kendo.directives", "ui.router", 'restangular', 'wakanda']);
fourcastApp.controller('mainController', function ($scope, $wakanda) {
    $wakanda.init().then(function (ds) {
    });
});
fourcastApp.controller('controller', function ($scope, Restangular) {
});
fourcastApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects/projectsContainer.html'
    });
    $stateProvider
        .state('projects.list', {
        url: '/list',
        templateUrl: 'views/projects/projectsList.html',
        controller: 'projectsController'
    });
    $stateProvider
        .state('projects.detail', {
        url: '/detail/:projectId',
        templateUrl: 'views/projects/projectDetail.html',
        controller: 'projectDetailController'
    });
    $stateProvider
        .state('subcontracts', {
        url: '/subcontracts',
        templateUrl: 'views/subcontracts/subcontractsContainer.html',
        controller: "scntContainerController"
    });
    $stateProvider
        .state('subcontracts.list', {
        url: '/list/:projectId',
        templateUrl: 'views/subcontracts/subcontractsList.html',
        controller: 'subcontractsController'
    });
    $stateProvider
        .state('subcontracts.detail', {
        url: '/detail/:subcontractId',
        templateUrl: 'views/subcontracts/subcontractDetail.html',
        controller: 'subcontractDetailController'
    });
    $stateProvider
        .state('costImports', {
        url: '/costImports',
        templateUrl: 'views/costImports/costImportsContainer.html',
        controller: 'costImportsController'
    });
    $stateProvider
        .state('costImports.list', {
        url: '/list',
        templateUrl: 'views/costImports/costImportsList.html',
        controller: 'costImportsController'
    });
});
fourcastApp.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('http://127.0.0.1:8081/rest');
    RestangularProvider.setResponseInterceptor(function (data, operation, what) {
        if (operation == 'getList') {
            var list = data["__ENTITIES"];
            return list;
        }
        return data;
    });
});
