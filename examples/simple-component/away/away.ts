/// <reference path="../../../src/typings/_custom.d.ts" />

/*
 * Angular 2
 */
import {
  Component,
  View,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from '@angular/angular2';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

// Use webpack's `require` to get files as a raw string using raw-loader
let styles   = require('./home.css');
let template = require('./away.html');


// Simple external file component example
@Component({
  selector: 'away'
})
@View({
  directives: [
    // Angular's core directives
    CORE_DIRECTIVES,

    // Angular's form directives
    FORM_DIRECTIVES,

    // Angular's router
    ROUTER_DIRECTIVES,
  ],
  // include our .html and .css file
  styles: [ styles ],
  template: template
})
export class Away {
  constructor() {

  }
}
