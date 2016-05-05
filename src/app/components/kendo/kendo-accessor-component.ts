import {Component} from '@angular/core';
import {ControlGroup, Control} from '@angular/common'
import {KendoValueAccessor} from './kendo_value_accessor'


@Component({
    selector: 'kendo-component',
    template: `
    <h1>Using Kendo Value Accessor</h1>
    <kendo-dropdownlist [options]="dropDownListOptions" data-text-field="text" data-value-field="value" ng-control="color" style="text-align: left;"></kendo-dropdownlist>
    `,
    directives: [KendoValueAccessor]
})

export class KendoAccessorComponent {

  cap: { color: Number } = { color: 1 };

    colors = [
        { text: "Black", value: 1 },
        { text: "Orange", value: 2 },
        { text: "Grey", value: 3 }
    ];

    dropDownListOptions: {
        dataSource: Array<Object>
    };


    capForm: ControlGroup;

    constructor() {
        this.dropDownListOptions = {
            dataSource: this.colors
        }

        this.capForm = new ControlGroup({
            color: new Control(2),
            amount: new Control(3)
        });
    }

    formState() {
        return JSON.stringify(this.capForm.value);
    }


}
