"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FourcastService_1 = require("../../../services/fourcast-service");
var main_1 = require('ag-grid-ng2/main');
var subcontractList = (function () {
    function subcontractList(fourcast) {
        this.fourcast = fourcast;
        this.columnDefs = [
            { headerName: "Number", field: "scntNumber" },
            { headerName: "Contract Amount", field: "amt_contractOriginal" },
        ];
        this.listData = [];
    }
    subcontractList.prototype.ngOnInit = function () {
        var _this = this;
        this.fourcast.getSubcontractList('')
            .subscribe(function (res) {
            _this.listData = res['__ENTITIES'];
        });
    };
    subcontractList = __decorate([
        core_1.Component({
            selector: 'subcontract-list',
            template: '<ag-grid-ng2 class="ag-fresh" style="height: 300px"  [columnDefs]="columnDefs"   [rowData] = "listData"></ag-grid-ng2>',
            directives: [main_1.AgGridNg2]
        }), 
        __metadata('design:paramtypes', [FourcastService_1.FourcastService])
    ], subcontractList);
    return subcontractList;
})();
exports.subcontractList = subcontractList;
