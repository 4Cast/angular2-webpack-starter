import {Injectable, provide} from "angular2/core";
import {Router} from 'angular2/router';

@Injectable()
export class KendoService {
  gridOptions: any;
  kendoObject: any;
  router: Router;
  kendoGridOptions :any;

  initGridOptions(router, route, sharedDataSource, columnRefs){
    let options = this.initKendoGridOptions(columnRefs, sharedDataSource);
    options._router = router;
    options._detailRoute = route;
    options.change = function(e) {
        var selectedRows = this.select();
        var dataItem = this.dataItem(selectedRows[0]);
        var Id = dataItem['id'];
        //console.log(this);
        this.options._router.navigate([this.options._detailRoute, {id: Id}])

        //this.parent.showDetail(Id);
    // selectedDataItems contains all selected data items
  }

  return options;

}



      initKendoGridOptions(columnRefs, sharedDataSource): any{
        var kGridOpts = {

          autoBind: true,
          columns: columnRefs,
          columnMenu: this.columnMenu,
          dataSource: sharedDataSource,
          editable: false,
          filterable: this.fileterableOpts,
          groupable: false,
          messages: this.kMessages,
          navigatable: false,
          pageable: this.pageableOpts,
          pageSize: 5,
          remove: this.kRemove,
          save: this.kSave,
          saveChanges: this.kSaveChanges,
          scrollable: this.kScollable,
          selectable: 'row',
          sortable: this.kSortable
        }
        return kGridOpts;
      }


      pageableOpts: any = {
          buttonCount: 5,
          info: true,
          input: true,
          // messages: {
          //     display: 'Showing {0}-{1} of {2} projects',
          //     empty: 'No listings available for display',
          //     first: 'First page',
          //     itemsPerPage: 'projects per page',
          //     last: 'Last page',
          //     next: 'Next page',
          //     of: 'of {0}',
          //     previous: 'Previous Page',
          //     page: 'Go to',
          //     refresh: 'Refresh the grid'
          // },
          pageSizes: [1, 5, 10, 15, 20, 40],
          previousNext: true,
          numeric: false,
          refresh: true
      }

      fileterableOpts =  {
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
      }

      columnMenu = {
          columns: false,
          filterable: true,
          messages: {
              columns: 'Choose Columns',
              filter: 'Apply Filter',
              sortAscending: 'Sort Ascending',
              sortDescending: 'Sort Descending'
          },
          sortable: true
      }

      kMessages = {
          filterempty: 'The applied filter has returned 0 results.'
      }

      kRemove = function (e) {
          //console.log('removing', e.model.firstName);
      }

      kSave = function (e) {
          //
      }

      kSaveChanges = function (e) {
          if (!confirm('Are you sure you want to save all changes?')) {
              e.preventDefault();
          }
      }

      kScollable = {
          virtual: false,
      }

      kSortable = {
          allowUnsort: true,
          mode: 'multiple'
      }

}
