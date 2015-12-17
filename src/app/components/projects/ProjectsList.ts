/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular
 */
import {Component, View, OnInit, NgFor, NgIf} from "angular2/angular2";
import {Response} from "angular2/http";
import {
  Router,
  RouterLink,
  RouterOutlet,
  RouteConfig,
  RouteParams,
} from "angular2/router";

/*
 * Services
 */

/*
*
* I currently have two services named fourcastService.
* This one I am using here is in the ./components/services folder
* I think this is the older one.
* The other one is in the folder /src/services.
* I think this is the new one based on webpack Starter
* Regardless, I want the service to return an observable rather than a promise.
*
*/


import {fourcastService} from "../services/fourcastService";
//import {ProjectDetail} from "./ProjectDetail";

let template = require('./ProjectsList-simple.html');

@Component({
  selector: 'search',
  providers: [fourcastService]
})
@View({
  directives: [NgIf, NgFor, RouterLink],
  template: template
})

// @RouteConfig([
//   { path: "/",        redirectTo: "main" },
//   { path: "/:id",      as: "ById",     component: ByIdComponent },
//   { path: "/main",     as: "Main",     component: MainComponent },
//   { path: "/interest/:id", as: "Interest", component: InterestComponent },
//   { path: "/sportify", as: "Sportify", component: SportifyComponent },
// ])
export class ProjectsList implements OnInit {
  query: string;
  results: Object;
  loading: boolean;

    //public fourcast: fourcastService,

  constructor(public fourcast: fourcastService, public router: Router,
              public routeParams: RouteParams) {
  }



  testRouter():void{

  }

  ngOnInit(){
    this.loading = true;

      this.fourcast.search("http://localhost/rest/project")
      .subscribe((res) =>{
        this.results = res;
        this.loading = false;
      })

  }


  makeRequest(){
    this.loading = true;

      this.fourcast.search("http://localhost/rest/project")
      .subscribe((res) =>{
        this.results = res;
        this.loading = false;
      })

  }
  submit(query: string): void {
    this.router.navigate(["/Search", {query: query}]);
    this.search("project");
  }



  newProject(): void {

  }

  search(dataClass: string): void {
    // this.query = this.routeParams.get("query");
    // if (!this.query) {
    //   return;
    // }

    //this.fourcast.searchTrack(dataClass).then(this.saveResults.bind(this));
  }

  saveResults(res: Response): void {
    this.results = res.json();
  }
}
