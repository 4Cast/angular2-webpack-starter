/// <reference path="../../typings/_custom.d.ts" />

import {Injectable, provide} from "@angular/angular2";
import {Http, Response} from "@angular/http";


/**
 * fourcastService works querying the fourcast Web API
 * https://developer.fourcast.com/web-api/
 */

@Injectable()
export class fourcastService {
  static BASE_URL: string = "http://127.0.0.1/rest/";
  data: Object; // default data
  loading: boolean;

  constructor(public http: Http) {
  }

  // query(URL: string, id?: string, params?: Array<string>): Promise<Response> {
  //   let queryURL: string = `${fourcastService.BASE_URL}${URL}`
  //   if (id) {
  //     queryURL = `${queryURL}\(${id}\)`;
  //   }
  //   if (params) {
  //     queryURL = `${queryURL}?${params.join("/")}`;
  //   }
  //
  //
  //   this.http.get(queryURL).subscribe(
  //     // onNext callback
  //     data => this.serverData(data),
  //     // onError callback
  //     err  => this.errorMessage(err),
  //     // onComplete callback
  //     ()   => console.log('complete')
  //   );//end http
  //     return null;
  // }

  // updateProject(project: Object): Promise<Response> {
  //
  //   let projectString: string = JSON.stringify(project);
  //   let updateURL = 'http://127.0.0.1/rest/project/?$method=update';
  //   return null;
  //   //return this.http.post(updateURL, projectString).toPromise();
  //
  // }

  // updateUser(user: Object): Promise<Response> {
  //
  //   let userString: string = JSON.stringify(user);
  //   let updateURL = 'http://127.0.0.1/rest/User/?$method=update';
  //   return null;
  //   //return this.http.post(updateURL, userString).toPromise();
  //
  // }

  makeRequest(): Object{
    this.loading = true;

    this.http.request("http://localhost/rest/project")

      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      })

      return this.data;
  }

  serverData(data) {
    console.log('data', data);
    this.data = data;
  }//serverData

  errorMessage(err) {
    console.info(`
      <p>An error occurred</p>
    `);
  }//errorMessage
  // query(): Promise<Response> {
  //   let queryURL: string = `${fourcastService.BASE_URL}`; //${URL
  //
  //   return this.http.get(queryURL).toPromise();
  // }

//   search(dataClass: string, id?: string): Promise<Response> {
//
// if(id)
//   {return this.query(dataClass, id);}
// else
//   {return this.query(dataClass);}
//     // return this.query()`/search`, [
//     //   `q=${query}`,
//     //   `type=${type}`
//     // ]);
//   }

  // searchTrack(dataClass: string): Promise<Response> {
  //   //return this.search(query, "track");
  //   return this.query(dataClass);
  // }

  // getTrack(id: string): Promise<Response> {
  //   return this.query("project", id);
  //   //return this.query(`/tracks/${id}`);
  // }

  // getProject(id: string): Promise<Response> {
  //   //return this.query(`/artists/${id}`);
  //   return this.query("project", id);
  // }

  // getUser(id: string): Promise<Response> {
  //   //return this.query(`/artists/${id}`);
  //   return this.query("User", id);
  // }

  // getAlbum(id: string): Promise<Response> {
  //   //return this.query(`/albums/${id}`);
  //   return this.query('');
  // }
}

export var fourcast_PROVIDERS: Array<any> = [
  provide(fourcastService, {useClass: fourcastService})
];
