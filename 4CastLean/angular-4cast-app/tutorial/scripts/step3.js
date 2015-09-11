var app = angular.module('step3', ['wakanda']);


app.controller('Controller', function ($scope, $wakanda) {
  

 $wakanda.init().then(function oninit(ds) {
 
        // once ready use the datastore on the $scope
        // feed the angular scope 
        // with the stored data of the Country DataClass
      
        $scope.projects = ds.project.$find();
       // $scope.groups = ds.Group.$find();
    });
    
});
