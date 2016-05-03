import {Component, OnInit} from 'angular2/core';
import {FourcastService} from '../../../services/fourcast-service'
import {Response} from "angular2/http";

const PALETTE_TEMPLATE = require('./project-palette.html');

@Component ({
  selector: "project-palette",
  template: PALETTE_TEMPLATE,
    providers: [FourcastService]
})

export class ProjectPalette implements OnInit {

title: string;
projects: any[];

constructor (public fourcast: FourcastService){

}

ngOnInit(){
  console.log('Project Palette on init');
  this.fourcast.getProjectPaletteList()
  .subscribe((res) =>{
    this.projects = res['__ENTITIES'];
  })

}

}
