/// <reference path="../../src/typings/_custom.d.ts" />

// Angular 2
import {Component, View} from '@angular/angular2';

import {DragElement} from './components/drag-element';

/*
 * App Component
 * our top level component that holds all of our components
 */
@Component({
  selector: 'app'
})
@View({
  directives: [ DragElement ],
  template: `
  <main>
    <drag-element></drag-element>
  </main>
  `
})
export class App {
  constructor() {

  }

}
