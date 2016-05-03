
/*
 * Angular
 */
import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, Router} from "angular2/router";

import {ProjectsList} from './projectList/projects.list';
import {ProjectDetailContainer} from "./projectDetail/project.detail.container";
import {MdButton} from '@angular2-material/button/button'

@Component({
  selector: "projects-container",
  directives: [RouterOutlet],
  template: `<div>
  <h4>Projects</h4>

  <router-outlet></router-outlet>
  </div>`

})

@RouteConfig([
  { path: '/list', name: 'List', component: ProjectsList, useAsDefault: true},
  { path: '/detail/:id/...', name: 'ProjectDetail', component: ProjectDetailContainer}
]
)


export class projects  {
projectId: string;
projectList: any[];
title: string;

constructor(private _router: Router){
    this.title = "Projects";
  }


}
