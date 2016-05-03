
import {Component, OnInit} from '@angular/core';

import {KendoGrid} from '../kendo/kendo-grid';
import {ViewDefinition} from '../../../services/view-definition';
import {KendoColumn} from '../../../services/view-definition';


const APP_TEMPLATE = require('./subcontract.list.html')

@Component({
    selector: 'subcontract-list',
    template:`<div id="kendo-grid-container">
        <kendo-grid [viewDefinition]="viewDefinition"></kendo-grid>
        </div>`,

    directives: [KendoGrid]
})



export class subcontractList{
  public viewDefinition: ViewDefinition;
  public className: string = "subcontract";
  public detailRoute: string = '../SubcontractDetail';
  public columnDefs: any[];

  constructor(){
    this.viewDefinition = new ViewDefinition();
    this.viewDefinition.className = 'subcontracts'
    this.viewDefinition.columnDefs = COLUMNS;
    this.viewDefinition.detailRoute = '../SubcontractDetail';
    this.viewDefinition.isProjectBased = true;
  }
}

var COLUMNS: KendoColumn[]  =[
  new KendoColumn('#','subcontractNumber',50),
  new KendoColumn('Code','costCodeNumber',70, true),
  new KendoColumn('Supplier','supplierName',300, true),
  new KendoColumn('Orig Amount','amt_contractOriginal',100),
  new KendoColumn('Variations','amt_toDateVariations',100),
  new KendoColumn('Security','security_securityTypeName',80)

]
