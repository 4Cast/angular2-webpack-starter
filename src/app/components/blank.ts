import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'app', // <app></app>
  template: ``

})

export class Blank implements OnInit {
  constructor() {}

  ngOnInit(){

    console.log("=============================================================");
    console.log("We are displaying the Blank Component");
    console.log(parent);
    console.log("=============================================================");

  }
}
