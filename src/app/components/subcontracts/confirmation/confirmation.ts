import {Component} from '@angular/core';
import {NgForm, NgIf}    from '@angular/common';
import {SubcontractService} from "../../../../services/subcontract-service";/*
* Services
*/


const DETAIL_TEMPLATE = require('./confirmation.html');

@Component({

 selector: "confirmation",

 template: DETAIL_TEMPLATE

})

//template: '<p>Details</p>'

export class Confirmation  {
 subcontract: Object = {};
 submitted = false;

 constructor(public subcontractService:SubcontractService) {
   this.subcontract = subcontractService.theSubcontract;

 }

}
