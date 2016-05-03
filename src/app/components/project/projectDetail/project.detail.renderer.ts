/*
 * Angular
 */

 import {Component} from 'angular2/core';
 import {NgForm}    from 'angular2/common';
 import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "angular2/common";
 import {FourcastService} from "../../../../services/fourcast-service";
/*
 * Services
 */


const DETAIL_TEMPLATE = require('./projectGeneral.html');

@Component({

  selector: "project-detail-general",
  template: DETAIL_TEMPLATE

})

//template: '<p>Details</p>'

export class ProjectGeneral  {
  project: Object = {};
  submitted = false;

  constructor(public fourcast: FourcastService) {

    this.project = fourcast.theEntity;
    console.log('Project General ts');

    // this.nameInput=this.myForm.controls['projectName'];
    // this.numberInput=this.myForm.controls['projectNumber'];
  }



  onSubmit(value) {
    this.submitted = true;

  }

}
