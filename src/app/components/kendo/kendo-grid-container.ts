import {Component} from '@angular/core';
import {KendoGrid} from './kendo-grid';

@Component({

template:`<div id="kendo-grid-container">
    <kendo-grid [className]="className" [columnDefs]="columnDefs" [detailRoute]="detailRoute"></kendo-grid>
    </div>`,
directives: [KendoGrid]
})

export class KendoGridContainer{
  public className: string = "project";
  public detailRoute: string = '../ProjectDetail';
  public columnDefs: any[];

  constructor(){
    this.columnDefs = COLUMNS;
  }

}

var COLUMNS: any[] = [
    { title: "Project Number", field: "projectNumber", width:80, filterable: false, hidden: false},
    { title: "Project Name", field: "projectName", width:150, filterable: false, hidden: false},
    { title: "Current Period", field: "currentCostPeriod", width:80, filterable: false, hidden: false},
    { title: "Start Date", field: "dateStart", width:100, filterable: false, hidden: false },
    { title: "Completion Date", field: "dateFinish", width:100, filterable: false, hidden: false }];
