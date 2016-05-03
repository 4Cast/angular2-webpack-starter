import {Component, DynamicComponentLoader, ElementRef, OnInit} from 'angular2/core'

@Component({
  directives:[],
  selector: 'kendo-date-picker',
  template: `<div class="demo-section k-content">
  <input value="10/10/2011" style="width: 100%" />
  </div>`
})

export class KendoDatePicker implements OnInit {

  constructor(public elementRef:ElementRef,
    public loader:DynamicComponentLoader) {
}

  ngOnInit(){

    jQuery(this.elementRef.nativeElement).kendoDatePicker();

  }
}
