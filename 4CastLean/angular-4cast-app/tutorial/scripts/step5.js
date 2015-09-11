var app = angular.module('step5', ['wakanda']);

//function Controller($scope, $wakanda) {

//    // Create a proxy of the server model
//    $wakanda.init().then(function oninit(ds) {
// 
//        // feed the angular scope with the stored data of the Country DataClass
//        $scope.countries = ds.Country.$find();

//    });

//    // manage when a country is choosen
//    $scope.$watch('country', function fetchRelatedCompanies(country) {
//       
//       debugger;
//        if (!country) return;
//        // get companies related to current country
//        country.companies.$fetch();
//    });

//}



app.controller('Controller', function ($scope, $wakanda) {
     $wakanda.init().then(function oninit(ds) {
 
        // feed the angular scope with the stored data of the Country DataClass
        $scope.projects = ds.project.$find();

    });

    // manage when a country is choosen
    $scope.$watch('project', function fetchRelatedProjects(project) {
       
       //debugger;
        if (!project) return;
        // get companies related to current country
        project.costCodes.$fetch();
    });
});