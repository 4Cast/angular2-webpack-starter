import {Component, OnInit} from 'angular2/core';
import {KendoGrid} from '../kendo/kendo-grid';
import {ViewDefinition} from '../../../services/view-definition';
import {KendoColumn} from '../../../services/view-definition';


@Component({
    selector: 'cost-codes-list',
    template:`<div id="kendo-grid-container">
        <kendo-grid [viewDefinition]="viewDefinition"></kendo-grid>
        </div>`,

    directives: [KendoGrid]
})

export class CostCodesList{
  public viewDefinition: ViewDefinition;
  public className: string = "costCode";
  public detailRoute: string = '../CostCodeDetail';
  public columnDefs: any[];

  constructor(){
    this.viewDefinition = new ViewDefinition();
    this.viewDefinition.className = 'costCodes' // it is plural because we access it from projects where it is named as a collection
    this.viewDefinition.columnDefs = COLUMNS;
    this.viewDefinition.detailRoute = '../CostCodeDetail';
    this.viewDefinition.isProjectBased = true;
    this.viewDefinition.orderByField = 'number';
  }
}

var COLUMNS  =[
  new KendoColumn('#','number',80, true),
  new KendoColumn('Title','name',300, true),
  new KendoColumn('Original Budget','amt_budgetOriginal_num',300, true),
  new KendoColumn('Approved Variations','amt_approvedVariations_num',80),
  new KendoColumn('Reallocations','amt_reallocations_num',80),
  new KendoColumn('Revised Budget','amt_budgetRevised_num',80),
  new KendoColumn('Committed to Date','amt_totalCommitted_num',80),
  new KendoColumn('Forecast Costs','amt_forecasts_num',80),
  new KendoColumn('Forecast Cost to Complete','amt_costToComplete_num',80),
  new KendoColumn('Variance','amt_variance_num',80),
  new KendoColumn('Total Costs to Date','amt_totalCosts_num',80),
  new KendoColumn('Revised Budget','amt_budgetRevised',80)

]
