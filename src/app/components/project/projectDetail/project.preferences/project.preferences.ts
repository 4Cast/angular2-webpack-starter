
/*
 * Angular
 */


 import {Component} from '@angular/core';
 import {NgForm, NgIf}    from '@angular/common';
 import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "@angular/common";

 import {FourcastService} from "../../../../../services/fourcast-service";
/*
 * Services
 */


const DETAIL_TEMPLATE = require('./projectPreferences.html');

@Component({

  selector: "project-detail-preferences",
  template: DETAIL_TEMPLATE

})

export class ProjectPreferences  {
  project: Object = {};


  constructor(public fourcast: FourcastService) {

    this.project = fourcast.theEntity;
    console.log('Project General ts');


  }

  onClickDoNotPay(event){
    this.project['pref_doNotPaySubcontractors']=event.target.checked;
  }

  onClickPostCosts(event){
    this.project['pref_postCosts']=event.target.checked;
    console.log(  this.project['pref_postCosts']);
  }

}
