/// <reference path="../../src/typings/_custom.d.ts" />

import {provide, Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import * as Rx  from '@reactivex/rxjs';


@Injectable()
export class simpleHttpService {
  url: string = 'https://api.github.com/search/repositories?q=';

  constructor(public http: Http) {

  }

//return this.http.get(this.url + query)

  /**
   * returns an Observable of repository names
   */
   search(query: string): Rx.Observable<any[]> {

     return this.http.get(query)
        .map((res: Response) => res.json())  // make json
        .map((res) => res['__ENTITIES']);
      // obs.map((res) => String(res))
      // obs.map((res) => JSON.parse(res));


   }
 }


export var HTTP_SERVICE_PROVIDERS: Array<any> = [
  provide(simpleHttpService, {useClass: simpleHttpService})
];
