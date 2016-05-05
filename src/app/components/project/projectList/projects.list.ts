import {Component} from '@angular/core';
import {KendoGrid} from '../../kendo/kendo-grid';
import {ViewDefinition, KendoColumn} from '../../../../services/view-definition';
import {Router} from '@angular/router-deprecated';

@Component({
selector: 'projects-list',
template:`  <button type="button" class="btn btn-primary" (click)="newProject()">Create Project</button>
            <p>&nbsp;</p>
            <kendo-grid [viewDefinition]="viewDefinition"></kendo-grid>
              `,
directives: [KendoGrid]
})

export class ProjectsList{
  public viewDefinition: ViewDefinition;

  constructor(private _router: Router){
    this.viewDefinition = new ViewDefinition();
    this.viewDefinition.columnDefs = COLUMNS;
    this.viewDefinition.className = 'project';
    this.viewDefinition.detailRoute = '../ProjectDetail';
    this.viewDefinition.orderByField = 'projectNumber';
  }

  newProject(){
    console.log('New Project ', this._router)
    this._router.navigate(['ProjectDetail', {id: ''}])
  }
}

var COLUMNS: KendoColumn[] = [new KendoColumn( "Project Number", "projectNumber", 80, true),
    new KendoColumn( "Project Name", "projectName", 150, true),
    new KendoColumn( "Current Period", "currentCostPeriod", 100),
    new KendoColumn( "Start Date", "dateStart", 100),
    new KendoColumn( "Completion Date", "dateFinish", 100)
  ]

    // { title: "Project Number", field: "projectNumber", width:80, filterable: false, hidden: false},
    // { title: "Project Name", field: "projectName", width:150, filterable: false, hidden: false},
    // { title: "Current Period", field: "currentCostPeriod", width:80, filterable: false, hidden: false},
    // { title: "Start Date", field: "dateStart", width:100, filterable: false, hidden: false },
    // { title: "Completion Date", field: "dateFinish", width:100, filterable: false, hidden: false }];
