/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular
 */
import {Component, View} from "angular2/angular2";
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink
} from "angular2/router";


import {ProjectsList} from "./ProjectsList";
import {ProjectDetail} from "./ProjectDetail";

@Component({
  selector: "projects",
  directives: [RouterOutlet, RouterLink],
  template: `
  <h2>Projects Main</h2>
  <a [router-link]="['./List']">List</a> |
  <a [router-link]="['./Detail', {id: 1} ]">Detail</a>
  <router-outlet></router-outlet>
  `
})

//{ path: "/", redirectTo: "list" },

@RouteConfig([
  
  { path: "/list", as: "List", component: ProjectsList },
  { path: "/detail/:id", as: "Detail", component: ProjectDetail },
//
 ])

export class ProjectsMain{
  constructor(public router: Router) {
  }
}
