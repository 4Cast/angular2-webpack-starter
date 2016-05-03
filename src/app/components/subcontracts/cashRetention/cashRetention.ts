import {Component} from '@angular/core';
import {SubcontractService} from "../../../../services/subcontract-service";


@Component({
  selector: "cashRetention",
  template: require("./cashRetention.html")
})

export class cashRetention {
  subcontract: Object = {};

  constructor(public subcontractService:SubcontractService) {
    this.subcontract = subcontractService.theSubcontract;

  }

}
