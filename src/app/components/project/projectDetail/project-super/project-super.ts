
 import {Component, OnInit} from '@angular/core';
 import {NgForm}    from '@angular/common';
 import {RouteData} from '@angular/router-deprecated';
 import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "@angular/common";
 import {FourcastService} from "../../../../../services/fourcast-service";

const DETAIL_TEMPLATE = require('./project-super.html');

@Component({

  selector: "project-detail-super",
  template: DETAIL_TEMPLATE

})

export class ProjectSuper implements OnInit {
  project: Object = {};
  id: string;

  constructor(public fourcast: FourcastService, data: RouteData) {
    this.project = fourcast.theEntity;

  }

  ngOnInit(){




  }


}
