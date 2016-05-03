
import {Component, OnInit} from '@angular/core';
// import {Response} from "@angular/http";
// import {FourcastService} from "../../../../services/fourcast-service";
// import {AgGridNg2} from 'ag-grid-ng2/main';
// import {GridOptions} from 'ag-grid/main';
// import {Router, RouteParams, OnActivate, ComponentInstruction} from "@angular/router-deprecated"

import {GridComponent} from "../../grid-component/grid-component";

const APP_TEMPLATE = require('./project.list.html')

@Component({
    selector: 'projects-list',
    template: `<p>The grid component should be just here</p>
    <grid-component></grid-component>`,

    directives: [GridComponent]
})

export class projectsList {
  // private gridOptions: GridOptions;
  // private showGrid: boolean;
  // private rowCount: string;
  // public className: string = "project";
  // private listData = [];

  constructor()
    {
      //this.showGrid = true;
      //this.listData = []; //fourcast.theProjectsList;

    //this.projectId = params.get('projectId');

  }

//   routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){
//     return new Promise((resolve)=>{
//
//       this.fourcast.getProjectsList()
//       .subscribe((res: Response) =>{
//         this.listData = res['__ENTITIES'];
//         console.log(this.listData);
//       resolve(true);
//     })
// })
//   }
//
//   private rowClicked(row){
//     console.log("row clicked " +row);
//     let projectId = this.listData[row]['id']
//     this._router.navigate(['../ProjectDetail', {id: projectId}])
//
//
//   }
//
//   private onRowClicked($event) {
//       let projectId = $event.node.data.id;
//       this._router.navigate(['../ProjectDetail', {id: projectId}])
//   };
}
var columnDefs =[ { headerName: "Project Number", field: "projectNumber", width:80},
        { headerName: "Project Name", field: "projectName", width:150},
        { headerName: "Current Period", field: "currentCostPeriod", width:80},
        { headerName: "Start Date", field: "dateStart", width:100 },
        { headerName: "Completion Date", field: "dateFinish", width:100 }
        ]
