import {Component, OnInit} from 'angular2/core';

declare var jQuery:JQueryStatic;

@Component({

  selector: 'kendo-simple',
  template: `<h1>Kendo Simple</h1>
  <div>
                    <h4>Basic Button</h4>
                    <p>
                        <button id="primaryTextButton" class="k-primary">Primary Button</button>
                        <button id="textButton">Button</button>
                    </p>
                </div>`

})

export class KendoSimple implements OnInit {

ngOnInit(){
  debugger;
   jQuery("#primaryTextButton").kendoButton();
}

}
