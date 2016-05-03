import {Component, OnInit} from '@angular/core';
import {NgForm}    from '@angular/common';
import {RouteData, Router, RouteParams} from '@angular/router-deprecated';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "@angular/common";
import {FourcastService} from "../../../../services/fourcast-service";

const DETAIL = require('./cost.code.detail.html');

@Component({
    selector: 'cost-code-detail',
    template: DETAIL,
    providers: [FourcastService] // TO-DO we actually don't want to do this because it creates a new instance of FourcastService

})



export class CostCodeDetail implements OnInit{
  costCode: Object = {};
  isNew: Boolean = false;
  project: Object = {};
  private _id: string;

  constructor(public fourcast: FourcastService,
    public router: Router,
    private _params: RouteParams){

    this.project = fourcast.theEntity;

    if(!this.costCode.hasOwnProperty('id')){

  }
}

ngOnInit(){

  this._id =this._params.get('id');
  if(this._id && this._id!=''){

    this.fourcast.get('costCode',this._id)
    .subscribe((res) =>{
      this.costCode = res;
    })
  }
  else{

    this.isNew = true;
    this.costCode['number'] = 0;
    this.costCode['name'] = '';
    this.costCode['amt_budgetOriginal_num'] = 0;

  }

}

update(){
  console.log("update", this.costCode);
  this.fourcast.update("costCode", this.costCode)
  .subscribe((res) =>{
    // this.project = res;
    // console.log('update project result', res);
    this.goBackToList();
})
}

goBackToList(){
  this.router.navigate(['../List'])
}


}
