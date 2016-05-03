/// <reference path="../../src/typings/_custom.d.ts" />

// Angular 2
import {bootstrap} from '@angular/angular2';

import {FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS} from '@angular/angular2'
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {App} from './app';


const APP_PROVIDERS = [
  // These are dependencies of our App
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS
];
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Universal/Platform services/bindings into Angular's dependency injection
 */
bootstrap(
  // Top Level Component
  App,
  // AppProviders
  APP_PROVIDERS
);
