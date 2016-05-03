
import {Component, DynamicComponentLoader, ElementRef, OnInit} from '@angular/core'
import {FourcastService} from "../../../../services/fourcast-service";
import {Response} from "@angular/http";

import {KendoService} from "../../../../services/kendo-service";
import {KendoColumn} from '../../../../services/view-definition';

/**
 * Main Kendo Grid Component
 */
@Component({
    directives: [  ],
    selector: 'cost-code-setup-list',
    template: ``,
    providers: [KendoService, FourcastService]
})
export class CostCodeSetupList implements OnInit {
  //gridOptions = GRIDOPTIONS;
  dataList: any[] = [];
  _that = this;
  public gridOptions: any;
  kGrid: any;
  sharedDataSource: kendo.data.DataSource;

  /**
   * Pass in the elementRef and dynamic component loader for binding the column template
   */
  constructor(public elementRef:ElementRef,
    public loader:DynamicComponentLoader,
    public fourcast: FourcastService,
    private _kendoService: KendoService) {

      // this.wakanda = new WakandaClient('http://127.0.0.1:8081');
      // console.log('Wakanda',this.wakanda);


}

doSomething(){

}

  /**
   * Instantite the grid using jQuery
   * Note: This also works appears to work inside ngOnInit()
   */
  ngOnInit(){
    // this.wakanda.getCatalog().then(function (ds) {
    //     //ds (for dataStore) is our catalog, it contains all ours dataClasses. For example:
    //     //ds.Company, ds.Employee, etc.
    //     console.log("ds",ds);
    //   });

      // use jQuery to create the Kendo Grid as usual
      //this.dataList = [{projectNumber: 1, projectName: 'Castles', currentCostPeriod: 'Feb 2016', dateStart: '1/1/16', dateFinish: '1/12/16'}];
      this.sharedDataSource = new kendo.data.DataSource({data: this.dataList, pageSize: 40, sort:[{field: "number", dir: "asc"}]});

        this.gridOptions = this._kendoService.initKendoGridOptions(COLUMNS,this.sharedDataSource);

        this.updateList();


  jQuery(this.elementRef.nativeElement).kendoGrid(this.gridOptions);


  }



updateList(){
    this.fourcast.getCollectionForProject('costCodes')

    .subscribe((res) =>{
      this.dataList = res['costCodes']['__ENTITIES'];
      console.log('cost code list result: ', res);
      this.sharedDataSource.data(this.dataList);
    })
  }

  /**
  * Kendo-UI type definitions for GridDataBoundEvent available from
  * https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/kendo-ui
  */
  gridDataBound(e: any) {
        //var columns = e.sender.columns; // showing one way to access columns

        /*
          Search for the index of the template column by class name
          (which is assigned inside this.gridOptions' columns declaration)
        */
        var actionColumnIndex = e.sender.wrapper.find('.grid-action-column').index();
        var rows = e.sender.tbody.children();

        /*
          Iterate through the rows to bind the template column with a dynamic loader
          (is this a performance issue for large datasets?)
        */
        jQuery.each(rows, (index, item) => {
            var row = jQuery(item);
            var dataItem = e.sender.dataItem(row);
            var cell = row.children('td').eq(actionColumnIndex);

            /*
              Use the DynamicComponentLoader to load the CustomActionDropdown Component
              inside of the grid cells
            */
            // this.loader.loadNextToLocation(CustomActionDropdown, this.elementRef)
            //     .then((result) => {
            //         /*
            //           Example showing how to access methods on the templated Component.
            //           For this example, it's passing in the row's uid to the setUid()
            //           method of the CustomActionDropdown Component
            //          */
            //         result.instance.setUid(dataItem.uid);
            //
            //         // append the action button to the grid cell
            //         cell.append(result.location.nativeElement);
            //     });
        });
    }


}

var COLUMNS  =[
  new KendoColumn('#','number',80, true),
  new KendoColumn('Title','name',300, true),
  new KendoColumn('Original Budget','amt_budgetOriginal_num',300, true),


]
