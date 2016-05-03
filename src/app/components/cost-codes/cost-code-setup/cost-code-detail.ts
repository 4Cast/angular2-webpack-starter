import {Component, Output, EventEmitter} from '@angular/core';
import {Form} from '@angular/common';
import {CostCode} from './cost-code';
import {CostCodeService} from '../../../../services/cost-code-service';
import {Project} from '../../../class.definitions/project';


const TEMPLATE = require('./cost-code-detail.html');

@Component ({

  template: TEMPLATE,
  selector: 'cost-code-detail',
  providers: [CostCodeService],

})

export class CostCodeForm {
  @Output() onChangeList = new EventEmitter<string>()

active = true;

model = new CostCode('','');

constructor(public costCodeService: CostCodeService){}
closeDetail(){
  this.onChangeList.emit('close');
}


addCostCode(){
  console.log('addCostCode',this.model)
  this.model.projectId = Project.projectId;
  this.costCodeService.updateCostCode(this.model)
  .subscribe((res) =>{
    this.model = new CostCode('','');
    this.active = false;
    this.onChangeList.emit('add');
    setTimeout(()=> this.active=true, 0);
  });

  }
}
