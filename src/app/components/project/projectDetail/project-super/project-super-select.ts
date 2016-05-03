import {Component, OnInit} from '@angular/core';
import {NgForm}    from '@angular/common';
import {FourcastService} from "../../../../../services/fourcast-service";

const DETAIL_TEMPLATE = require('./project-super-select.html');

@Component({

 selector: "project-super-select",
 template: DETAIL_TEMPLATE

})

export class ProjectSuper implements OnInit {
 project: Object = {};
 id: string;

 constructor(public fourcast: FourcastService) {
   this.project = fourcast.theEntity;

 }

 ngOnInit(){




 }


}
