/*
 * Providers provided by Angular
 */
import {provide, enableProdMode} from '@angular/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from '@angular/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import * as core from '@angular/core';
import {EnvironmentService} from './services/environment-service';
import {FourcastService} from './services/fourcast-service';


import {SampleAppComponent} from './SampleAppComponent';

import 'bootstrap-loader';

const ENV_PROVIDERS = [];

//I'm having a problem with 'process' here. It's saying it can't find process
// So just for the moment let's comment this out

// if ('production' === process.env.ENV) {
//   enableProdMode();
// } else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
// }

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app.component';


/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(App, [
    ...ENV_PROVIDERS,
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    EnvironmentService,
    FourcastService,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ])
  .catch(err => console.error(err));

});

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
