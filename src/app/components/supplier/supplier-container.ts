


import {Component} from "@angular/core";
import {Router, RouterOutlet, RouteConfig} from "@angular/router-deprecated";
import {FourcastService} from "../../../services/fourcast-service";


import {SuppliersList} from './supplier-list';
import {SupplierDetail} from "./supplier-detail/supplier-detail";

@Component({
  selector: "suppliers-container",
  directives: [RouterOutlet],
  template: `<div class='container'>
  <h4>{{Title}}</h4>
  <router-outlet></router-outlet>
  </div>`,
  providers: [FourcastService]

})
@RouteConfig([

 { path: '/list', name: 'List', component: SuppliersList, useAsDefault: true},
 { path: '/detail/:id/...', name: 'Detail', component: SupplierDetail}

])


export class SuppliersContainer  {

Title: string = "Suppliers"

}
