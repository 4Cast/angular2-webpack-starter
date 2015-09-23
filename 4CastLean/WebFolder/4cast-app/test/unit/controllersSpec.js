'use strict';

/* jasmine specs for controllers go here */
describe('4Cast controllers', function() {

  describe('projectsController', function(){

//    beforeEach(module('fourcastApp')
//    );
    
    var foo = 0;
    var value = 0;
    
    beforeEach(function(done) {
    foo += 1;
    
      setTimeout(function() {
        value = 0;
        done();
      }, 1);
    });
    
    it('should show the result of foo', function(){
    	expect(foo).toEqual(1);
    });
    
//    it('should create "projects" model with 103 projects', inject(function($controller) {
//      		var scope = {},
//          	ctrl = $controller('projectsController', {$scope:scope});
//			expect(foo).toEqual(2);
//			expect(scope.projects.__ENTITIES.length).toBe(103);
//
//      
//    }));

  });
});
