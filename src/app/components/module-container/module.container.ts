
/*
 * Angular
 */
import {Component} from "@angular/core";
import {RouteConfig, RouteDefinition, RouterOutlet} from "@angular/router-deprecated";

// import {ProjectsList} from './projectList/projects.list';
// import {ProjectDetailContainer} from "./projectDetail/project.detail.container";

@Component({
  selector: "module-container",
  directives: [RouterOutlet],
  template: `<div class='container'>
  <h4>{{Title}}</h4>
  <router-outlet></router-outlet>
  </div>`,
  inputs: ['Title', 'routeDefinitions']
})
@RouteConfig(this.routeDefinitions)


export class ModuleContainer  {
routeDefinitions: RouteDefinition[];
entityId: string;
public dataList: any[];

constructor(){}

//   routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){
//     return new Promise((resolve)=>{
//
//       this.fourcast.getProjectsList()
//       .subscribe((res: Response) =>{
//         this.projectList = res['__ENTITIES'];
//
//         this.fourcast.theList = this.projectList;
//         console.log("Projects container Router on Activate.", this.projectList)
//
//
//       resolve(true);
//     })
// })
//
// }
}
