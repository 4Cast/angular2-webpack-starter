import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {SubcontractService} from "../../../../services/subcontract-service";/*
* Services
*/

const DETAIL_TEMPLATE = require('./documents.html');

@Component({

 selector: "documents",

 template: DETAIL_TEMPLATE

})

//template: '<p>Details</p>'

export class Documents  {
 subcontract: Object = {};
 submitted = false;

 constructor(public subcontractService:SubcontractService) {
   this.subcontract = subcontractService.theSubcontract;

 }



 onSubmit(value) {
   this.submitted = true;
   console.log('onSubmit');
 }

}
