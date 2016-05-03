
import {Component, OnInit} from '@angular/core';

import {KendoGrid} from '../kendo/kendo-grid';
import {ViewDefinition} from '../../../services/view-definition';
import {KendoColumn} from '../../../services/view-definition';

@Component({
    selector: 'users-list',
    template: `
    <kendo-grid [viewDefinition]="viewDefinition"></kendo-grid>`,

    directives: [KendoGrid]
})

export class UsersList {
  public viewDefinition: ViewDefinition;

  constructor(){

    this.viewDefinition = new ViewDefinition;
    this.viewDefinition.className = 'user';
    this.viewDefinition.detailRoute = '../UserDetail';
    this.viewDefinition.columnDefs = COLUMNS;
  }
}

var COLUMNS: any[] = [
  new KendoColumn('User Number','userNumber',60),
  new KendoColumn('Name','fullName',150, true),
  new KendoColumn('Login Name','loginName',80),
  new KendoColumn('Role','role',100, true)
]
