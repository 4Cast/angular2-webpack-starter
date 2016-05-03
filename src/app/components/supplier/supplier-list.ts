import {Component, OnInit} from '@angular/core';
import {KendoGrid} from '../kendo/kendo-grid';
import {ViewDefinition} from '../../../services/view-definition';
import {KendoColumn} from '../../../services/view-definition';


@Component({
    selector: 'supplier-list',
    template:`<div id="kendo-grid-container">
        <kendo-grid [viewDefinition]="viewDefinition"></kendo-grid>
        </div>`,
    directives: [KendoGrid]
})

export class SuppliersList {
  public viewDefinition: ViewDefinition;

  constructor(){
    this.viewDefinition = new ViewDefinition();
    this.viewDefinition.className = 'supplier';
    this.viewDefinition.detailRoute = '../SupplierDetail';
    this.viewDefinition.columnDefs = COLUMNS;
  }
}

var COLUMNS: any[] = [ 
  new KendoColumn('Supplier Name', 'companyName', 120, true),
  new KendoColumn('Code', 'supplierCode', 150, true),
  new KendoColumn('ABN', 'abn', 80, true)
];
