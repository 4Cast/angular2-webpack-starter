/// <reference path="../../src/typings/_custom.d.ts" />

// Angular 2
import {Component, View} from '@angular/angular2';

import {Home} from './home/home';
import {Away} from './away/away';

/*
 * App Component
 * our top level component that holds all of our components
 */
@Component({
  selector: 'app'
})
@View({
  directives: [ Home, Away ],
  template: `
  <main>
    <!--<home></home>-->
    
    <away></away>
  </main>
  `
})
export class App {
  constructor() {

  }

}
