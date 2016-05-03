import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>


  pipes: [ ],

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `<h2>About 4Cast<\h2>`
})
export class About {
  // Set our default values
  data = { value: '' };
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {

    // this.title.getData().subscribe(data => this.data = data);
  }

}
