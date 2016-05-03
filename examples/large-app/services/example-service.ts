/// <reference path="../../../src/typings/_custom.d.ts" />

import {Injectable} from '@angular/angular2';
import {Http} from '@angular/http';
import * as Rx from '@reactivex/rxjs';


@Injectable()
export class ExampleService {
  constructor(public http: Http) {

  }
}

export const EXAMPLE_SERVICE_BINDINGS = [
  ExampleService
];
