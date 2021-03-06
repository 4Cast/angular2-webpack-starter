/// <reference path="../../../src/typings/_custom.d.ts" />
/*
 * Angular 2
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/angular2';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

/*
 * App
 */
import {Autofocus} from './Autofocus';

export * from './Autofocus';
// global App only directives
export var SERVICES_DIRECTIVES: Array<any> = [
  Autofocus
];

// global Angular core and other Angular module directives (form/router)
export var ANGULAR_DIRECTIVES: Array<any> = [
  // Angular's core directives
  CORE_DIRECTIVES,

  // Angular's form directives
  FORM_DIRECTIVES,

  // Angular's router
  ROUTER_DIRECTIVES,
];

// global App only directives
export var APP_DIRECTIVES: Array<any> = [
  ANGULAR_DIRECTIVES,
  SERVICES_DIRECTIVES
];
