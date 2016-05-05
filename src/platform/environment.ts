// Angular 2 browser
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser/index';

// Angular 2
import {enableProdMode} from '@angular/core';

// Environment Providers
var PROVIDERS = [];

if ('production' === ENV) {
  // Production
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
  ];

} else {
  // Development
  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
  ];

}


export const ENV_PROVIDERS = [
  ...PROVIDERS
];
