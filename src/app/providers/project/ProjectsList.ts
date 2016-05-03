

/*
 * Angular
 */
import {Component, View, OnInit } from "angular2/core";
import{NgFor, NgIf} from "angular2/common";
import {Response} from "angular2/http";
//import {NgGrid, NgGridItem} from "angular2-grid/src/NgGrid";
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
* I currently have two services named FourcastService.
* This one I am using here is in the ./components/services folder
* I think this is the older one.
* The other one is in the folder /src/services.
* I think this is the new one based on webpack Starter
* Regardless, I want the service to return an observable rather than a promise.
*
*/


import {FourcastService} from "../../../services/fourcast-service";
//import {ProjectDetail} from "./ProjectDetail";

let template = require('./projectsList.html');

@Component({
  selector: 'search',
  providers: [FourcastService]
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

    //public fourcast: FourcastService,

  constructor(public fourcast: FourcastService, public router: Router,
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
