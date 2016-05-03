import {Component, OnInit, ViewChild} from 'angular2/core';
import {KendoGrid} from '../../kendo/kendo-grid';
import {ViewDefinition} from '../../../../services/view-definition';
import {KendoColumn} from '../../../../services/view-definition';
import {CostCodeSetupList} from './cost.codes.setup.list';
import {CostCodeForm} from './cost-code-detail';


const TEMPLATE = require('./cost.codes.setup.html');

@Component({
    selector: 'cost-codes-list',
    template: TEMPLATE,

    directives: [KendoGrid, CostCodeSetupList, CostCodeForm]
})

export class CostCodesSetup {

  public className: string = "costCode";
  //public detailRoute: string = '../CostCodeDetail';
  public columnDefs: any[];
  editMode: boolean = false;

  @ViewChild(CostCodeSetupList)
  private _listComponent:CostCodeSetupList;

  constructor(){

  }

  onChangeList(eventType: string){
    console.log('on change list: ',eventType);

    switch (eventType){

      case "add":
        this._listComponent.updateList();
        break;

      case "close":
        this.editMode = false;
        break;
    }

  }


}

var COLUMNS  =[
  new KendoColumn('#','number',80, true),
  new KendoColumn('Title','name',300, true),
  new KendoColumn('Original Budget','amt_budgetOriginal_num',300, true),


]
