/// <reference path="../../../src/typings/_custom.d.ts" />

import {provide, Injectable, Observable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import * as Rx from '@reactivex/rxjs';


@Injectable()
export class GithubService {
  url: string = 'https://api.github.com/search/repositories?q=';
  constructor(public http: Http) {

  }

  /**
   * @returns an Observable of repository names
   */
  search(query: string): Observable<any[]> {
  return null;
  // this.http.get(this.url + query)
    //  .map(res => res.json())  // make json
    //  .map(res => res.items)   // extract "items" only
    //  .filter(repos => repos); // only if there are results
  }
  renderRes(res:Response) :any{
    return null;
  }
}





export var GITHUB_PROVIDERS: Array<any> = [
  provide(GithubService, {useClass: GithubService})
];
