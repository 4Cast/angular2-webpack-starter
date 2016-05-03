// 2016/03/21 - found this here: http://www.telerik.com/forums/problem-with-kendovalueaccessor-in-angular-2-0-0-beta-0
// See almost to the bottom, post from Jason


import {Component} from '@angular/core';

import {KendoValueAccessor} from './kendo_value_accessor';


@Component({
    selector: 'Jason',
    templateUrl: 'Jason.html'
})

export class JasonComponent {

    //just defindes what is in _uiControls
    private _uiControls: {
        panelBar: kendo.ui.PanelBar;
        treeViewCategories: kendo.ui.TreeView;
        isLoaded: boolean;
    };

    //#region Life Cycle Methods
    ngOnInit() {
        window['JasonComponent'] = this;
    }

    ngOnDestroy() {
        delete window['JasonComponent'];
    }

    ngAfterViewInit() {
        try {
            this.createUIControls();
            window['JasonComponent'] = this; //not the best way to get the component reference to the global scope.  Is there another way?
        }
        catch (e) {  } //Log.error(e);
        finally {
        }
    }
    //#endregion

    constructor() {
        //need to initialize _uiControls here
        this._uiControls = {
            panelBar: null,
            treeViewCategories: null,
            isLoaded: false
        };
    }

    /**
 * Creates all the Kendo UI controls
 */
    private createUIControls(): void {
        this._uiControls.panelBar = $('#KPanelBar').kendoPanelBar(this.getPanelBarOptions()).data("kendoPanelBar");
        this._uiControls.treeViewCategories = $('#kTreeViewCategories').kendoTreeView(this.getTreeViewCategoriesOptions()).data("kendoTreeView");
        this._uiControls.isLoaded = true;
    }

    private getPanelBarOptions(): kendo.ui.PanelBarOptions {
        let component = this;
        let options: kendo.ui.PanelBarOptions = {
            activate: function (e) {
            }
        }
        return options;
    }

    private getTreeViewCategoriesOptions(): kendo.ui.TreeViewOptions {
        let component = this;
        let dataSource: kendo.data.HierarchicalDataSource = new kendo.data.HierarchicalDataSource({
            data: [],
            schema: {
                model: {
                    id: 'key',
                    children: 'items'
                }
            },
        });
        let options: kendo.ui.TreeViewOptions = {
            dataSource: dataSource,
            checkboxes: {
                checkChildren: true,
            },
            loadOnDemand: false,
            dataTextField: 'name',
        };
        return options;
    }
}
