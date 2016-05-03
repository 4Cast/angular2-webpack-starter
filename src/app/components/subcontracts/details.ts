
/*
 * Angular
 */

 import {Component} from 'angular2/core';
 import {NgForm}    from 'angular2/common';
 import {SubcontractService} from "../../../services/subcontract-service";
/*
 * Services
 */


const DETAIL_TEMPLATE = require('./details.html');

@Component({

  selector: "subcontract-detail",

  template: DETAIL_TEMPLATE

})

//template: '<p>Details</p>'

export class subcontractDetails  {
  subcontract: Object = {};
  submitted = false;

  constructor(public subcontractService: SubcontractService) {

    this.subcontract = subcontractService.theSubcontract;
    console.log("Original contract amount: "+this.subcontract["amt_contractOriginal"]);

    // this.nameInput=this.myForm.controls['projectName'];
    // this.numberInput=this.myForm.controls['projectNumber'];
  }



  onSubmit(value) {
    this.submitted = true;
    console.log('onSubmit');
  }

}
