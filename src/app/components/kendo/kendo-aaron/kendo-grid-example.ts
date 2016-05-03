import {AfterViewInit, Component, DynamicComponentLoader, ElementRef} from 'angular2/core'

import {CustomActionDropdown} from './custom-action-dropdown';


/**
 * Main Kendo Grid Component
 */
@Component({
    directives: [ CustomActionDropdown /* templated column dropdown */ ],
    selector: 'kendo-grid-example',
    template: ``
})
export class KendoGridExample implements AfterViewInit {


  _that = this;

  /**
   * Static array of items for the grid
   * TODO: Declare dynamic Kendo DataSource inside of an Angular 2 Service
   */
  customers:Array<any> = [
    {
        _id: 1,
        firstName: 'Tom',
        lastName: 'Williams'
    },
    {
        _id: 2,
        firstName: 'Sally',
        lastName: 'Smith'
    },
    {
        _id: 3,
        firstName: 'Joe',
        lastName: 'Johnson'
    }
  ];

  /**
   * Here's an extensive collection of grid settings, if you're interested
   */
  gridOptions = {
        autoBind: true,
        columns: [
            {
                field: '_id',
                filterable: false,
                hidden: false,
                title: 'ID',
                width: '10%'
            },
            {
                field: 'firstName',
                filterable: {
                    cell: {
                        dataTextField: 'year',
                        delay: 0,
                        enabled: true,
                        minLength: 0,
                        operator: 'contains',
                        showOperators: true,
                        suggestionOperator: 'contains'
                    },
                    extra: true,
                    mode: 'menu, row'
                },
                title: 'First Name',
                width: '25%'
            },
            {
                field: 'lastName',
                filterable: {
                    cell: {
                        delay: 0,
                        enabled: true,
                        minLength: 0,
                        operator: 'contains',
                        showOperators: true,
                        suggestionOperator: 'contains'
                    }
                },
                title: 'Last Name',
                width: '45%'
            },
            {
                attributes: {
                    class: 'grid-action-column'
                },
                template: ``,
                title: 'Actions',
                width: '10%'
            }
        ],
        columnMenu: {
            columns: false,
            filterable: true,
            messages: {
                columns: 'Choose Columns',
                filter: 'Apply Filter',
                sortAscending: 'Sort Ascending',
                sortDescending: 'Sort Descending'
            },
            sortable: true
        },
        dataSource: {
          data: this.customers,
          pageSize: 5 // setting pageSize inside the dataSource prevents "NaNn-NaN of 3" for paging
        },
        dataBound: this.gridDataBound.bind(this._that), // bind the local 'this' scope (is this kosher?)
        editable: {
            confirmation: 'Are you sure you want to drop this prospect?',
            createAt: 'top',
            destroy: true,
            mode: 'popup', // inline | incell | popup
            update: true
        },
        filterable: {
            //extra: true,
            messages: {
                and: 'and',
                or: 'or',
                filter: 'Apply Filter',
                clear: 'Clear Filter',
                isFalse: 'False',
                isTrue: 'True',
                selectValue: 'Select'
            },
            mode: 'row'
        },
        groupable: true,
        messages: {
            filterempty: 'The applied filter has returned 0 results.'
        },

        navigatable: false,
        pageable: {
            buttonCount: 5,
            info: true,
            input: true,
            messages: {
                display: 'Showing {0}-{1} of {2} prospects',
                empty: 'No listings available for display',
                first: 'First page',
                itemsPerPage: 'prospects per page',
                last: 'Last page',
                next: 'Next page',
                of: 'of {0}',
                previous: 'Previous Page',
                page: 'Go to',
                refresh: 'Refresh the grid'
            },
            pageSizes: [1, 5, 10, 15, 20],
            previousNext: true,
            numeric: false,
            refresh: true
        },
        pageSize: 5,
        remove: function (e) {
            //console.log('removing', e.model.firstName);
        },
        save: function (e) {
            //
        },
        saveChanges: function (e) {
            if (!confirm('Are you sure you want to save all changes?')) {
                e.preventDefault();
            }
        },
        scrollable: {
            virtual: false,
        },
        selectable: 'multiple, row',
        sortable: {
            allowUnsort: true,
            mode: 'multiple'
        }
    };

  /**
   * Pass in the elementRef and dynamic component loader for binding the column template
   */
  constructor(public elementRef:ElementRef, public loader:DynamicComponentLoader) {

  }

  /**
   * Instantite the grid using jQuery
   * Note: This also works appears to work inside ngOnInit()
   */
  ngAfterViewInit() {
      // use jQuery to create the Kendo Grid as usual
      console.log('ngAfterViewInit native element ',jQuery(this.elementRef.nativeElement));
      jQuery(this.elementRef.nativeElement).kendoGrid(this.gridOptions);
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
            this.loader.loadNextToLocation(CustomActionDropdown, this.elementRef)
                .then((result) => {
                    /*
                      Example showing how to access methods on the templated Component.
                      For this example, it's passing in the row's uid to the setUid()
                      method of the CustomActionDropdown Component
                     */
                    result.instance.setUid(dataItem.uid);

                    // append the action button to the grid cell
                    cell.append(result.location.nativeElement);
                });
        });
    }
}
