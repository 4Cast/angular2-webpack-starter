
/*
 * Angular
 */

import {Component, OnInit, Injector, Pipe} from "@angular/core";
import {NgIf} from "@angular/common";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "@angular/common";
import {Response} from "@angular/http";
import {RouteParams, Router, RouterLink, LocationStrategy, RouteConfig, RouteData, OnActivate, ComponentInstruction} from "@angular/router-deprecated";



/*
 * Services
 */
import {SubcontractService} from "../../../services/subcontract-service";

const SUMMARY_TEMPLATE = require('./summary.html');

@Component({
  selector: "summary",

  directives: [],
  template: SUMMARY_TEMPLATE
})
export class subcontractSummary {
  id: string;
  public subcontract: Object = {};
  public subcontractor: Object = {};
  private supplierContact: Object = {};


  constructor(private _routeParams: RouteParams,
              public subcontractService: SubcontractService) {
    //this.id = routeParams.get("id");
    this.subcontract = subcontractService.theSubcontract;
    this.id =  this.subcontract['id'];

    //this.subcontractor = fourcast.theSubcontractor;
    //this.sctrContact = fourcast.theSctrContact;

    console.log("In Summary, orginal contract amount: "+this.subcontract['amt_contractOriginal'])
    // this.nameInput=this.myForm.controls['projectName'];
    // this.numberInput=this.myForm.controls['projectNumber'];
  }


  // routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){
  //   return new Promise((resolve)=>{
  //
  //     console.log("Summary – routerOnActivate, id: "+this.id);
  //     if(this.id!=''){
  //       this.fourcast.getContactForSubcontract(this.id)
  //       .subscribe((res: Response) =>{
  //         this.supplierContact = res['contact'];
  //
  //         console.log('routerOnActivate – result received.');
  //         console.log(this.supplierContact['firstName'])
  //         resolve(true);
  //
  //       })
  //     }
  //
  //   })
  // }

  ngOnInit(): void {




    //  let id = this._routeParams.get('id');
    //  if(id!=''){
    //    this.fourcast.getSubcontract(id)
    //    .subscribe((res: Response) =>{
    //      this.subcontract = res;
     //
    //       // get the subcontractor
     //
    //      let scrtId = this.subcontract["uid_sctr"];
    //      this.fourcast.getSubcontractor(scrtId)
    //      .subscribe((res: Response) =>{
    //        this.subcontractor = res;
    //      })
     //
     //
    //      // get the subcontractor contact
     //
    //      let scctId = this.subcontract["uid_scct"];
    //      this.fourcast.getSctrContact(scctId)
    //      .subscribe((res: Response) =>{
    //        this.sctrContact = res;
    //      })
    //    })
    //  }

  }

  back(): void {
  //  this.router.navigate(['../List'])
  }



}
