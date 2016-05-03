
/*
 * Angular
 */
import {Component} from "angular2/core";

@Component({
  selector: "cost-codes-setup",

  template: `<div class='container'>
  <h4>Cost Codes</h4>
  <router-outlet></router-outlet>
  </div>`

})


export class CostCodesSetup  {


constructor(){
    this.title = "Cost Codes";
  }
}
