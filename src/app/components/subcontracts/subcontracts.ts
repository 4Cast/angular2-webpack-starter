
/*
 * Angular
 */
import {Component} from "@angular/core";
import {Router, RouteParams, RouterOutlet, RouteConfig, OnActivate, ComponentInstruction} from "@angular/router-deprecated";
import {Response} from "@angular/http";
import {FourcastService} from "../../../services/fourcast-service";
import {SubcontractService} from '../../../services/subcontract-service';

import {subcontractList} from './subcontract.list';
import {SubcontractDetailContainer} from "./subcontract.detail.container";


@Component({
  selector: "subcontract-container",
  directives: [RouterOutlet],
  template: `<div class='container'>
  <h4>Subcontracts</h4>
  <router-outlet></router-outlet>
  </div>`,
  styles: [`li {cursor: pointer;}`],
  providers: [FourcastService, SubcontractService]

})
@RouteConfig([

 { path: '/list', name: 'List', component: subcontractList, useAsDefault: true},
 { path: '/detail/:id/...', name: 'SubcontractDetail', component: SubcontractDetailContainer}
 // { path: '/detail', name: 'Detail', component: subcontractDetails},
 // { path: 'bank-guarantee', name: 'BankGuarantee', component: bgContainer},
 // { path: 'cash-retention', name: 'CashRetention', component: cashRetention}
//  { path: '/draggable',     as: 'Draggable',     component: DragElement}
])


export class subcontracts implements OnActivate  {
projectId: string;
public subcontractList: any[];

constructor(
  private _params: RouteParams,
  private router: Router,
  public fourcast: FourcastService,
  public subcontractService: SubcontractService){}

  routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){
    return new Promise((resolve)=>{

      this.projectId = this.fourcast.getProjectId();
      this.subcontractService.getSubcontractList()
      .subscribe((res) =>{
          console.log("Router on Activate - response received");
          console.log("result:"+res);
        let subcontractResult = res['subcontracts'];
          console.log("subcontractResult: "+subcontractResult)
        this.subcontractList = subcontractResult['__ENTITIES'];
        console.log("Router on Activate subcontract list length: "+this.subcontractList.length);
        this.fourcast.theSubcontractList = this.subcontractList;
        //console.log(this.fourcast);

      resolve(true);
    })
})

}
}
