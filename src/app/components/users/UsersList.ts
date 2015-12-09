/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular
 */
import {Component, View, OnInit, NgFor, NgIf} from "angular2/angular2";
import {Response} from "angular2/http";
import {
  Router,
  RouterLink,
  RouteParams,
} from "angular2/router";

/*
 * Services
 */
import {fourcastService} from "../../services/fourcastService";

@Component({
  selector: "search"
})
@View({
  directives: [NgIf, NgFor, RouterLink],
  template: `  <p>
      <div *ng-if="results">
<div>
  <a class="btn btn-primary" [router-link]="['/Detail', {id: ''}]" role="button">New User</a>
  </div>
        <div class="row">
          <div class="col-sm-6 col-md-4" *ng-for="#t of results.__ENTITIES">
            <div class="thumbnail">
              <div class="content">
              <a [router-link]="['/Detail', {id: t.ID}]">
              {{t.familyName}}
              </a>
              <p>{{t.givenName}}</p>



              </div>
            </div>
          </div>
        </div>
      </div>
    </p>
`
})
export class UsersList implements OnInit {
  query: string;
  results: Object;

  constructor(public fourcast: fourcastService, public router: Router,
              public routeParams: RouteParams) {
  }

  ngOnInit(): void {
    this.search("User");
  }

  submit(query: string): void {
    this.router.navigate(["/Search", {query: query}]);
    this.search("User");
  }

  newProject(): void {

  }

  search(dataClass: string): void {
    // this.query = this.routeParams.get("query");
    // if (!this.query) {
    //   return;
    // }
  //  this.fourcast.searchTrack(dataClass).then(this.saveResults.bind(this));
  }

  saveResults(res: Response): void {
    this.results = res.json();
  }
}
