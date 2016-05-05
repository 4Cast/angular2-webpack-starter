/// <reference path="../../../src/typings/_custom.d.ts" />

import {provide, Injectable} from '@angular/angular2';
import {Http, Response} from '@angular/http';
import * as Rx  from '@reactivex/rxjs';


@Injectable()
export class GithubService {
  url: string = 'https://api.github.com/search/repositories?q=';

  constructor(public http: Http) {

  }

//return this.http.get(this.url + query)

  /**
   * returns an Observable of repository names
   */
   search(query: string): Rx.Observable<any[]> {

     return this.http.get(this.url + query)
       .map((res: Response) => res.json())  // make json
       .map((res: Response) => res['items'])   // extract "items" only
       .filter(repos => repos); // only if there are results
   }
 }


export var GITHUB_PROVIDERS: Array<any> = [
  provide(GithubService, {useClass: GithubService})
];