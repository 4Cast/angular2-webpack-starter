
import {Component, OnInit} from '@angular/core';
// import {Response} from "@angular/http";
// import {FourcastService} from "../../../services/fourcast-service";
// import {AgGridNg2} from 'ag-grid-ng2/main';
// import {GridOptions} from 'ag-grid/main';
// import {Router, RouteParams, OnActivate, ComponentInstruction} from "@angular/router-deprecated"


//const APP_TEMPLATE = require('./grid-component.html')



@Component({
    selector: 'grid-component',
    template: `<p>Grid Component</p>`


})
//  directives: [AgGridNg2]
//inputs: [ 'className', 'columnDefs']

export class GridComponent implements OnInit{
  // private gridOptions: GridOptions;
  // private showGrid: boolean;
  // private rowCount: string;
  //
  // private listData = [];
  // public className: string;
  // public columnDefs: any[];


  constructor(){}
  //   public fourcast: FourcastService,
  //   private _router: Router,
  //   params: RouteParams)
  //   {
  //     this.gridOptions = <GridOptions>{};
  //     this.columnDefs;
  //     this.showGrid = true;
  //     this.listData = []; //fourcast.theProjectsList;
  //
  //     console.log('grid component constructor');
  //
  //   //this.projectId = params.get('projectId');
  //
  // }
  ngOnInit(){
    console.log('grid component onInit');
  }

//   routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){
//     return new Promise((resolve)=>{
//
//       this.fourcast.getCollection(this.className)
//       .subscribe((res: Response) =>{
//         this.listData = res['__ENTITIES'];
//         console.log(this.listData);
//       resolve(true);
//     })
// })
//   }
//
//
//   private onRowClicked($event) {
//       let Id = $event.node.data.id;
//       //this._router.navigate(['../ProjectDetail', {id: projectId}])
//   };


}
