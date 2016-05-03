
import {Component, OnInit} from '@angular/core';
import {Response} from "@angular/http";
import {AgGridNg2} from 'ag-grid-ng2/main';
import {FourcastService} from "../../../services/fourcast-service";
import {Router} from "@angular/router-deprecated"



const APP_TEMPLATE = require('./grid-component.html')

@Component({
  selector: 'grid-component',
  template:  APP_TEMPLATE,
  directives: [AgGridNg2],
  inputs: ['className', 'columnDefs', 'detailRoute']
})

export class GridComponent implements OnInit{
  private listData = [];
  public detailRoute: string;
  public className: string;
  private showGrid: boolean;
  private rowCount: string;

  constructor(public fourcast: FourcastService, private _router: Router){

  }
  ngOnInit(){
    console.log('grid-component on init, className: ', this.className)
    this.fourcast.getCollection(this.className)
    .subscribe((res: Response) =>{
      this.listData = res['__ENTITIES'];
      console.log('list data',this.listData);
    })

  }

  private onRowClicked($event) {
      let Id = $event.node.data.id;
      this._router.navigate([this.detailRoute, {id: Id}])
  };
}
