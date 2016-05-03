/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular
 */
import {Component, View} from "@angular/angular2";
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink
} from "@angular/router-deprecated";

import {SearchGithub} from '../../../../examples/rx-autosuggest/components/search-github';
import {Timeflies} from '../../../../examples/rx-timeflies/components/timeflies';
import {Tictactoe} from '../../../../examples/game-tictactoe/components/tictactoe';

import {ProjectsList} from "./ProjectsList";
import {ProjectDetail} from "./ProjectDetail";

@Component({
  selector: "projects",
  directives: [RouterOutlet, RouterLink],
  template: `
  <h2>Projects Main</h2>

<ul>
  <li><a [router-link]="['./Search']">Search</a></li>
  <li><a [router-link]="['./Timeflies']">Timeflies</a></li>
</ul>

<!--  <a [router-link]="['./List']">List</a> |
  <a [router-link]="['./Detail', {id: 1} ]">Detail</a> -->
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/',              redirectTo: ['/search'] },
  { path: '/search',        as: 'Search',        component: SearchGithub},
  { path: '/timeflies',     as: 'Timeflies',     component: Timeflies },
  { path: '/tictactoe',     as: 'Tictactoe',     component: Tictactoe },
  { path: '/list',          as: 'List',          component: ProjectsList}
  //{ path: '/draggable',     as: 'Draggable',     component: DragElement}
])


export class ProjectsMain  {
  constructor(public router: Router) {
  }


}
