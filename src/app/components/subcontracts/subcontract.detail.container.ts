

/*
 * Angular
 */
import {Component} from "@angular/core";
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink,
  RouteParams, OnActivate, ComponentInstruction
} from "@angular/router-deprecated";
import {Response} from "@angular/http";

import {SubcontractService} from "../../../services/subcontract-service";

import {subcontractList} from './subcontract.list';
import {subcontractSummary} from "./summary";
import {subcontractDetails} from "./details";
import {ContractTerms} from "./contractTerms/contractTerms";
import {Blank} from "../../components/blank";
import {bgContainer} from "./bank-guarantee/bg-container";
import {cashRetention} from "./cashRetention/cashRetention";
import {Documents} from "./documents/documents";
import {Scope} from './scope/scope';

const MAIN_TEMPLATE = require('./subcontract.detail.container.html');

@Component({
  selector: "subcontractSummary",
  directives: [RouterOutlet, RouterLink],
  template: MAIN_TEMPLATE,
  styles: [`li {cursor: pointer;}`],
  providers: [SubcontractService]

})
@RouteConfig([

 { path: '/summary', name: 'Summary', component: subcontractSummary, useAsDefault: true},
 { path: '/detail', name: 'Detail', component: subcontractDetails},
 { path: 'bank-guarantee', name: 'BankGuarantee', component: bgContainer},
 { path: 'cash-retention', name: 'CashRetention', component: cashRetention},
 { path: '/terms', name: "ContractTerms", component: ContractTerms},
 { path: '/documents', name: 'Documents', component: Documents},
 { path: '/scope', name: 'Scope', component: Scope}
//  { path: '/draggable',     as: 'Draggable',     component: DragElement}
])


export class SubcontractDetailContainer implements OnActivate  {

  id: string;
  public subcontract: Object = {};
  public subcontractor: Object = {};
  public sctrContact: Object = {};
  public costCode: Object = {};

  constructor(
    private _routeParams: RouteParams,
    public router: Router,
    public subcontractService: SubcontractService) {}



  routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){
    return new Promise((resolve)=>{
      this.id =to.params['id'];
      console.log("routerOnActivate, id: "+this.id);
      if(this.id!=''){
        this.subcontractService.getSubcontract(this.id)
        .subscribe((res) =>{
          this.subcontract = res;
          this.subcontractService.theSubcontract = this.subcontract;
          console.log('routerOnActivate – result received.',res);

          resolve(true);

        })
      }

    })




  }

  ngOnInit(): void {
    //this.id = '7A8063A3CEBA48ADBDD2F643B49A5E0E';
    // this.id = this._routeParams.get('id');
    // if(this.id!=''){
    //   this.fourcast.getSubcontract(this.id)
    //   .subscribe((res: Response) =>{
    //     this.subcontract = res;
    //     console.log("We got a response in subcontract main, router: "+this.router);
    //     this.router.navigate( ['Summary', {id: this.id}] );
    //     this.fourcast.theSubcontract = this.subcontract;
    //
    //     let scrtId = this.subcontract["uid_sctr"];
    //     this.fourcast.getSubcontractor(scrtId)
    //     .subscribe((res: Response) =>{
    //       this.subcontractor = res;
    //     })
    //
    //     let ccodId = this.subcontract["uid_ccod"];
    //     this.fourcast.getCostCode(ccodId)
    //     .subscribe((res: Response) =>{
    //       this.costCode = res;
    //     })
    //   })
    // }

  }

goToPage(pageName: string){
    this.router.navigate( [pageName]);
}

  goToSummary(){
    console.log("goToSummary, this.id: "+this.id);
    this.router.navigate( ['Summary']);
  }

  goToDetail(){
    console.log("goToDetail, this.id: "+this.id);
    this.router.navigate( ['Detail']);
  }

  goToBankGuarantee(){
    this.router.navigate( ['CashRetention']);
  }

  goToContractTerms(){
    this.router.navigate( ['ContractTerms']);
  }

  goToDocuments(){
    this.router.navigate( ['Documents']);
  }


  updateSubcontract(){
    console.log("update subcontract");
    this.subcontractService.update(this.subcontract)
    .subscribe((res) =>{
      this.subcontract = res;
      this.goBackToList();
  })
}

  goBackToList(){
    this.router.navigate(['../List'])
  }
}
