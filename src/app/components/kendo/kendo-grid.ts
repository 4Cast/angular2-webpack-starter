import {Component, DynamicComponentLoader, ElementRef, OnInit} from 'angular2/core'
import {FourcastService} from "../../../services/fourcast-service";
import {ViewDefinition} from '../../../services/view-definition';
import {Response} from "angular2/http";

import {Router} from "angular2/router";
import {KendoService} from "../../../services/kendo-service";


/**
 * Main Kendo Grid Component
 */
@Component({
    directives: [  ],
    selector: 'kendo-grid',
    template: ``,
    inputs: ['viewDefinition'],
    providers: [KendoService, FourcastService]
})
export class KendoGrid implements OnInit {
  //gridOptions = GRIDOPTIONS;
  dataList: any[] = [];
  viewDefinition: ViewDefinition;
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
    private _router: Router,
    private _kendoService: KendoService) {

      // this.wakanda = new WakandaClient('http://127.0.0.1:8081');
      // console.log('Wakanda',this.wakanda);


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

      let dataOptions = {
        data: this.dataList,
        pageSize: 40,
        sort: null
      };

      if(this.viewDefinition.orderByField){
        let sortOptions = [{field: this.viewDefinition.orderByField, dir: 'asc'}]; // TODO implement direction in viewDefinition
         dataOptions.sort = sortOptions;
      }


      this.sharedDataSource = new kendo.data.DataSource(dataOptions);

        this.gridOptions = this._kendoService.initGridOptions(this._router,
        this.viewDefinition.detailRoute,
        this.sharedDataSource,
        this.viewDefinition.columnDefs
      );

      this.refreshList();

  jQuery(this.elementRef.nativeElement).kendoGrid(this.gridOptions);


  }

  refreshList(){

    this.fourcast.getCollection(this.viewDefinition)

    .subscribe((res) =>{
      if(this.viewDefinition.isProjectBased){
        this.dataList = res[this.viewDefinition.className]['__ENTITIES']}
      else
        {this.dataList = res['__ENTITIES']}

      console.log('result: ', res);
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
