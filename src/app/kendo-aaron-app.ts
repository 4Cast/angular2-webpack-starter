import {Component, DynamicComponentLoader, ElementRef, OnInit, View} from 'angular2/core'

import {KendoGridExample} from './components/kendo/kendo-aaron/kendo-grid-example';


@Component({
  selector: 'app',
  providers: [],
  template: `
    <div style="padding: 0 15px;">
      <h2>ng2-bound Kendo Grid Template Column</h2>
      <h4>Click the actions in the column dropdown and watch the row's unique id (uid) appear in the Output log</h4>

      <kendo-grid-example></kendo-grid-example>

      <div class="alert alert-info"
           style="margin: 15px 0; overflow-y: scroll; height: 200px;">
           <h4>Output (newest on top)</h4>
           <div id="log"></div>
    </div>
  `,
  directives: [KendoGridExample]
})
export class AaronApp {

  constructor() {
    //
  }

}
