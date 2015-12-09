/// <reference path="../../../typings/_custom.d.ts" />

import {Injectable, provide} from "angular2/angular2";
import {Http, Response} from "angular2/http";

//import {Promise} from "angular2/src/core/facade/async";

/**
 * fourcastService works querying the fourcast Web API
 * https://developer.fourcast.com/web-api/
 */

@Injectable()
export class fourcastService {
  static BASE_URL: string = "http://127.0.0.1/rest/";

  constructor(public http: Http) {
  }

  query(URL: string, id?: string, params?: Array<string>): void {
    let queryURL: string = `${fourcastService.BASE_URL}${URL}`
    if (id) {
      queryURL = `${queryURL}\(${id}\)`;
    }
    if (params) {
      queryURL = `${queryURL}?${params.join("/")}`;
    }

    //return this.http.get(queryURL).toPromise();
  }

  updateProject(project: Object): void {

    let projectString: string = JSON.stringify(project);
    let updateURL = 'http://127.0.0.1/rest/project/?$method=update';
    //return this.http.post(updateURL, projectString).toPromise();

  }

  updateUser(user: Object): void {

    let userString: string = JSON.stringify(user);
    let updateURL = 'http://127.0.0.1/rest/User/?$method=update';
    //return this.http.post(updateURL, userString).toPromise();

  }
  // query(): Promise<Response> {
  //   let queryURL: string = `${fourcastService.BASE_URL}`; //${URL
  //
  //   return this.http.get(queryURL).toPromise();
  // }

  search(dataClass: string, id?: string): void {

if(id)
  {return this.query(dataClass, id);}
else
  {return this.query(dataClass);}
    // return this.query()`/search`, [
    //   `q=${query}`,
    //   `type=${type}`
    // ]);
  }

  searchTrack(dataClass: string): void {
    //return this.search(query, "track");
    return this.query(dataClass);
  }

  getTrack(id: string): void {
    return this.query("project", id);
    //return this.query(`/tracks/${id}`);
  }

  getProject(id: string):void {
    //return this.query(`/artists/${id}`);
    //return this.query("project", id);
  }

  getUser(id: string): void {
    //return this.query(`/artists/${id}`);
  //  return this.query("User", id);
  }

  getAlbum(id: string): void {
    //return this.query(`/albums/${id}`);
    //return this.query('');
  }
}

export var fourcast_PROVIDERS: Array<any> = [
  provide(fourcastService, {useClass: fourcastService})
];
