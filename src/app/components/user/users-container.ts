


import {Component} from "@angular/core";
import {Router, RouterOutlet, RouteConfig} from "@angular/router-deprecated";



import {UsersList} from './user-list';
import {UserDetail} from "./user-detail/user-detail";

@Component({
  selector: "users-container",
  directives: [RouterOutlet],
  template: `<div class='container'>
  <h4>Users</h4>
  <router-outlet></router-outlet>
  </div>`

})
@RouteConfig([

 { path: '/list', name: 'List', component: UsersList, useAsDefault: true},
 { path: '/detail/:id/...', name: 'Detail', component: UserDetail}

])


export class UserContainer  {

}
