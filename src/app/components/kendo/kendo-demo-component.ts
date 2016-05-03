import { Component, ElementRef, OnInit, OnChanges, OnDestroy} from 'angular2/core';

declare var jQuery:JQueryStatic;

/* Using this element would be something like ...
    template: `
        <div>Hey, this is a cool app!</div>
        <div><kendocomponent widgetname="Foo!"></kendocomponent></div>
    `
*/

@Component({
    selector: '[data-role=kendocomponent]',
    inputs: ['widgetname', 'bound'],
    //outputs: [...], <- if we had events, like our own 'onChange'
    bindings: [ElementRef],
    template: '<span>You told me it was {{widgetname}}</span>' })


export class KendoComponent implements OnInit, OnChanges, OnDestroy {
  public widgetname: String;
  public initialised: boolean;
  public domElement: any;
  public bound: any;
  public empty: any;

  static get parameters(){
    return [[ElementRef]];
  }

  constructor(elementRef) {

    var attr: any;
    this.domElement = elementRef.nativeElement;
    this.initialised = false;
    jQuery(this.domElement).attr('style', 'background-color: blue;');
  
  }

ngOnInit(){}

ngOnChanges(changes){
  if(!this.initialised) { this.init(); this.initialised = true; }
  if(changes.bound){
    jQuery(this.domElement).data('kendo' +this.widgetname).value(changes.bound.currentValue.value);
  }
}

init(){
  jQuery(this.domElement)['kendo' + this.widgetname](this.bound);
}

ngOnDestroy() {
    jQuery(this.domElement).data('kendo' + this.widgetname).destroy();
    jQuery(this.domElement).empty();
  }

 }
