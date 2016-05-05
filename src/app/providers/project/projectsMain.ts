

/*
 * Angular
 */
import {Component, View} from "@angular/core";
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink
} from "@angular/router-deprecated";

import {ProjectsList} from "./ProjectsList";
import {ProjectDetail} from "./ProjectDetail";

@Component({
  selector: "projects",
  directives: [RouterOutlet, RouterLink],
  template: `
  <h2>Projects Main</h2>

<ul>

  <li><a [routerLink]="['./List']">List</a>
  <!--<li><a [router-link]="['./Detail', {id: ''}]">Detail</a></li>-->
</ul>

<!--  <a [router-link]="['./List']">List</a> |
  <a [router-link]="['./Detail', {id: 1} ]">Detail</a> -->
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/',              redirectTo: ['/list'] },

  { path: '/list',          as: 'List',          component: ProjectsList},
  { path: '/detail/:id',    as: 'Detail',        component: ProjectDetail}
  //{ path: '/draggable',     as: 'Draggable',     component: DragElement}
])


export class ProjectsMain  {
  constructor(public router: Router) {
  }


}
