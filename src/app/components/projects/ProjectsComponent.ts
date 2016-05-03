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

/*
 * Components
 */
// import {MainComponent} from "../products/MainComponent";
// import {InterestComponent} from "../products/InterestComponent";
// import {SportifyComponent} from "../products/SportifyComponent";
// import {ByIdComponent} from "../products/ByIdComponent";

@Component({
  selector: "products"
})
@View({
  directives: [RouterOutlet, RouterLink],
  template: `
  <h2>Projects</h2>

  <div class="navLinks">
    <a [router-link]="['./Main']">Main</a> |
    <a [router-link]="['./Interest', {id: 1} ]">Interest</a> |
    <a [router-link]="['./Sportify']">Sportify</a> |
    Enter id: <input #id size="6">
    <button (click)="goToProduct(id.value)">Go</button>
    <button (click)="goToInterest(6)">Go to interest</button>
  </div>

  <div class="products-area">
    <router-outlet></router-outlet>
  </div>
  `
})
// @RouteConfig([
//   { path: "/",        redirectTo: "main" },
//   { path: "/:id",      as: "ById",     component: ByIdComponent },
//   { path: "/main",     as: "Main",     component: MainComponent },
//   { path: "/interest/:id", as: "Interest", component: InterestComponent },
//   { path: "/sportify", as: "Sportify", component: SportifyComponent },
// ])
export class ProductsComponent {
  constructor(public router: Router) {
  }

  goToProduct(id:string) {
    this.router.navigate(['./ById', {id: id}]);
  }

  goToInterest(id:number){
    this.router.navigate(['./Interest', {id: id}])
  }
}
