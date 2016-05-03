/// <reference path="../../src/typings/_custom.d.ts" />

// Angular 2
import {Component, View} from '@angular/angular2';
import {Http, Response} from '@angular/http';
import * as Rx  from '@reactivex/rxjs';

import {simpleHttpService} from './simpleHttpService';

@Component({
  selector: 'app',
  providers: [simpleHttpService]
})
@View({

  template: `
  <main>
    <h3>Simple Http Request</h3>
    <button type = 'button' (click)='makeRequest()'>Make Request</button>
    <div *ng-if='loading'>Loading...</div>
    <pre>{{data | json}}</pre>
  `
})

export class App {
  data: Object;
  loading: boolean;

  constructor(public simpleService: simpleHttpService) {

  }

  makeRequest(): void{
    this.loading = true;

this.simpleService.search("http://localhost/rest/project")

      .subscribe((res) => {
        //.map((res: Response) => res.json())  // make json

        this.data = res;
        // var result: Object = res['_body'];
        // var resultString = String(result);
        // this.data = JSON.parse(resultString);
        //this.data = this.data['__ENTITIES']
        this.loading = false;
      })


  }

}
