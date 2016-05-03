
/*
 * Angular
 */

import {Component} from "@angular/core";
import {RouteConfig, RouterOutlet} from "@angular/router-deprecated";


import {CostCodesList} from './cost.codes.list';
import {CostCodeDetail} from "./cost-code-detail/cost.code.detail";

@Component({
  selector: "projects-container",
  directives: [RouterOutlet],
  template: `<div class='container'>
  <h4>Cost Centres</h4>
  <router-outlet></router-outlet>
  </div>`

})

@RouteConfig([
  { path: '/list', name: 'List', component: CostCodesList, useAsDefault: true},
  { path: '/detail/:id', name: 'CostCodeDetail', component: CostCodeDetail}
]
)


export class CostCodes  {
projectId: string;
projectList: any[];
title: string;

constructor(){
    this.title = "Cost Centres";
  }
}
