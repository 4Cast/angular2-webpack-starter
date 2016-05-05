import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {SubcontractService} from "../../../../services/subcontract-service";/*
* Services
*/


const DETAIL_TEMPLATE = require('./contractTerms.html');

@Component({

 selector: "subcontract-terms",

 template: DETAIL_TEMPLATE

})

//template: '<p>Details</p>'

export class ContractTerms  {
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
