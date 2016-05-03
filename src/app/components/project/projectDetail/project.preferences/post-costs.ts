/*
 * Angular
 */

 import {Component} from 'angular2/core';
 import {NgForm, NgIf}    from 'angular2/common';
 import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "angular2/common";
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
