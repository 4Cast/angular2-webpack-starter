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

  selector: "post-costs",
  template: DETAIL_TEMPLATE,


})

export class PostCosts  {
  project: Object = {};


  constructor(public fourcast: FourcastService) {

    this.project = fourcast.theEntity;
    console.log('Project General ts');


  }


}
