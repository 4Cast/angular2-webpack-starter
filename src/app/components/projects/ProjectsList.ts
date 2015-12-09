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
import {fourcastService} from "../../services/fourcastService";
//import {ProjectDetail} from "./ProjectDetail";


@Component({
  selector: "search"
})
@View({
  directives: [NgIf, NgFor, RouterLink],
  template: `  <p>
      <div *ng-if="results">
<div>
<button (click)="testRouter()">Test</button>
<!--  <a class="btn btn-primary" [router-link]="['/Detail', {id: ''}]" role="button">New Project</a>-->
  </div>
        <div class="row">
          <div class="col-sm-6 col-md-4" *ng-for="#t of results.__ENTITIES">
            <div class="thumbnail">
              <div class="content">
              <a [router-link]="['../Detail', {id: t.id}]">
              {{t.projectName}}
            </a>
              <p>{{t.projectNumber}}</p>



              </div>
            </div>
          </div>
        </div>
      </div>
    </p>
`
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

  constructor(public fourcast: fourcastService, public router: Router,
              public routeParams: RouteParams) {
  }

  ngOnInit(): void {
    this.search("project");
  }

  testRouter():void{
    debugger;

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
