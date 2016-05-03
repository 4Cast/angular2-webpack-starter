import { Component, View, Inject, Input, Output, OnDestroy, OnChanges, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'kendoDropDownList',
  inputs: ['bound', 'role'],
  bindings: [ElementRef],
  template: '<p>This is where the content goes</p>'
})

//a2 lifecycle https://github.com/angular/angular/blob/master/modules/@angular/lifecycle_hooks.ts
export class KendoDropDownList implements OnInit, OnChanges, OnDestroy{

  private _element: ElementRef;
  private _kWidget: any;
  private _kendoKeys: any[];

  public widgetName: string;
  public bound: any;


    static get parameters() {
        return [[ElementRef]];
    }
    constructor(elementRef, widgetName) {
        //this._element = $(elementRef.nativeElement).children()[0];
        this._element = elementRef.nativeElement;
        this.widgetName = 'kendoDropDownList'; //should be overridden by inheritors
        if(!widgetName) {
            console.error('widgetName is required for KendoComponent');
        }
    }
    render() {

      console.log('render', this._element);
        this._kWidget = jQuery(this._element).kendoDropDownList;//(this.bound);
        this._kendoKeys = [];
        for(var key in this._kWidget) {
            this._kendoKeys.push(key);
        }
    }
    ngOnChanges(changes) {
      console.log('on changes');
        if(!this._kendoKeys || !this._kendoKeys.length) {
            this.render();
        }
        if(changes.bound) {
            outer: for(var propKey in changes.bound) {
                for(var kendoKeyIndex = 0; kendoKeyIndex < this._kendoKeys.length; kendoKeyIndex++) {
                    var kendoKey = this._kendoKeys[kendoKeyIndex];
                    if(propKey === kendoKey) {
                        if(typeof(this._kWidget[kendoKey]) === 'Function') {
                            this._kWidget[kendoKey](changes.bound[propKey]);
                        }
                        continue outer;
                    }
                }
            }
        }
        this.render();
    }
    ngOnInit() {
      console.log('on init');
        this.render();
    }
    ngOnDestroy() {
        var kElement = jQuery(this._element);
        kElement.data(this.widgetName).destroy();
        kElement.empty();
    }
};

// function createCommonKendoComponent(selector, widgetName) {
//     @Component({
//         selector: selector,
//         inputs: ['bound', 'role'],
//         bindings: [ElementRef]
//     })
//     @View({ template: '<ng-content></ng-content>' })
//     class CommonComponent extends KendoComponent {
//         constructor(elementRef) {
//             super(elementRef, widgetName);
//         }
//     }
//     return CommonComponent;
// }

//export var KendoDropDownList = createCommonKendoComponent('[data-role=dropdownlist]', 'kendoDropDownList');
