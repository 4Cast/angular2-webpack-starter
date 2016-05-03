/// <reference path="../../../src/typings/_custom.d.ts" />
import {Component, View} from '@angular/angular2';
import {Away} from './away';

@Component({
  selector: 'test-cmp'
})
@View({
  directives: [ Away ]
})
class TestComponent {

}

describe('Away', () => {
  var away;

  beforeEach(() => {
    away = new Away();
  });

  it('should work', () => {
    expect(away).toBeDefined();
  });

});
