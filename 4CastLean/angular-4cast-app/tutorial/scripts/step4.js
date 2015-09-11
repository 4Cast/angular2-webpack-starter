var app = angular.module('step4', ['wakanda'])

app.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];
        
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});


app.controller('Controller', function ($scope, $wakanda) {
    $wakanda.init().then(function oninit(ds) {
 
        // once ready use the datastore on the $scope
        // feed the angular scope 
        // with the stored data of the Employee DataClass
        $scope.projects = ds.project.$find();
    });
});