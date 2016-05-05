
import {Component} from '@angular/core';
import {SubcontractService} from "../../../../services/subcontract-service";

@Component({
  selector: 'bgContainer',
  template: require('./bgContainer.html')

  //require('./bgContainer.html')

})

export class bgContainer {

  public subcontract: Object = {};

  constructor(public subcontractService:SubcontractService) {
    this.subcontract = subcontractService.theSubcontract;

  }

}
