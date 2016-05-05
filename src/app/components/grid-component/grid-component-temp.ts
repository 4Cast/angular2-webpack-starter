import {Component, OnInit} from '@angular/core';
import {Response} from "@angular/http";
import {FourcastService} from "../../../services/fourcast-service";
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import {Router, RouteParams, OnActivate, ComponentInstruction} from "@angular/router-deprecated"

const APP_TEMPLATE = require('./grid-component.html')



@Component({
    selector: 'grid',
    template: APP_TEMPLATE,

    directives: [AgGridNg2],
    inputs: ['className', 'columnDefs']
})

export class GridComponent implements OnActivate {
  private gridOptions: GridOptions;
  private showGrid: boolean;
  private rowCount: string;

  private listData = [];
  public className: string;
  public columnDefs: any[];


  constructor(
    public fourcast: FourcastService,
    private _router: Router,
    params: RouteParams)
    {
      this.gridOptions = <GridOptions>{};
      this.columnDefs;
      this.showGrid = true;
      this.listData = []; //fourcast.theProjectsList;

    //this.projectId = params.get('projectId');

  }

  routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){
    return new Promise((resolve)=>{

      this.fourcast.getCollection(this.className)
      .subscribe((res: Response) =>{
        this.listData = res['__ENTITIES'];
        console.log(this.listData);
      resolve(true);
    })
})
  }

  private rowClicked(row){
    console.log("row clicked " +row);
    let Id = this.listData[row]['id'];
    //this._router.navigate(['../ProjectDetail', {id: Id}])


  }

  private onRowClicked($event) {
      let Id = $event.node.data.id;
      //this._router.navigate(['../ProjectDetail', {id: projectId}])
  };

  private createColumnDefs()  {
      this.columnDefs =[ { headerName: "Project Number", field: "projectNumber", width:80},
        { headerName: "Project Name", field: "projectName", width:150},
        { headerName: "Current Period", field: "currentCostPeriod", width:80},
        { headerName: "Start Date", field: "dateStart", width:100 },
        { headerName: "Completion Date", field: "dateFinish", width:100 }
        ]

    }


}
