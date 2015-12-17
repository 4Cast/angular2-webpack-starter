/// <reference path="../../src/typings/_custom.d.ts" />

// Angular 2
import {bootstrap} from 'angular2/angular2';

import {ELEMENT_PROBE_BINDINGS} from 'angular2/angular2'
import {HTTP_BINDINGS} from 'angular2/http';

/*
 * App
 */
import {App} from './app';

/*
 * Services
 */


const APP_BINDINGS = [
  // These are dependencies of our App

  HTTP_BINDINGS,
  ELEMENT_PROBE_BINDINGS,
  // Services

];
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Universal/Platform services/bindings into Angular's dependency injection
 */
bootstrap(
  // Top Level Component
  App,
  // AppBindings
  APP_BINDINGS
);
