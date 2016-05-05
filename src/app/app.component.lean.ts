/*
 **************************************
 * 4Cast Starter
 **************************************
 *
 * Angular 2 decorators and services
 */

import {Component, OnInit} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, RouterLink, OnActivate, ComponentInstruction} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';
import {FourcastService} from '../services/fourcast-service';


import {RouterActive} from './router-active';
import {Project} from './class.definitions/project';
import {MainMenu} from './components/main-menu/main-menu';
import {Angular2Accordion} from './components/main-menu/main-menu-a';

import {About} from './about';
import {Home} from './home/home.component';
import {projects} from './components/project/projects';
import {subcontracts} from './components/subcontracts/subcontracts';
import {ProjectPalette} from './components/ProjectPalette/ProjectPalette';
import {CostCodes} from './components/cost-codes/cost.codes.container';
import {HeroDetailComponent} from './hero-detail.component';
import {KendoGridContainer} from './components/kendo/kendo-grid-container';
import {KendoSimple} from './components/kendo/kendo-simple';
import {UserContainer} from './components/user/users-container';
import {SuppliersContainer} from './components/supplier/supplier-container';
import {SimpleCostImportSetup} from './components/costImports/simple.cost.import.setup';
import {HeroFormComponent} from './components/form-validation/hero-form';
import {CostCodesSetup} from './components/cost-codes/cost-code-setup/cost.codes.setup';


//import {kendoContainer} from './components/kendo/kendo-container';
//import {SubcontractMain} from './components/subcontracts/subcontractsMain';
//import {ProjectsMain} from './providers/project/projectsMain'
//import {SEMANTIC_COMPONENTS} from './directives/semantic/semantic';

const APP_STYLES = require('./app.css');
const APP_TEMPLATE = require('./app.html');

/*
 * App Component
 * Top Level Component
 */
@Component({

  selector: 'app',
  providers: [ ...FORM_PROVIDERS, FourcastService],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive, ProjectPalette, MainMenu, Angular2Accordion ],
  pipes: [],
  styles: [APP_STYLES],
  template: APP_TEMPLATE
})

@RouteConfig([
  { path: '/',            redirectTo: ['About'] },
  { path: '/home', component: Home, name: 'Home' },
  //{ path: '/kendo', component: kendoContainer, name: 'Kendo' },
  { path: '/about', component: About, name: 'About' },
  { path: '/projects/...', component: projects, name: 'Projects' },
  { path: '/subcontracts/...', component: subcontracts, name: "Subcontracts"},
  { path: '/users/...', component: UserContainer, name: 'Users'},
  { path: '/suppliers/...', component: SuppliersContainer, name: 'Suppliers'},
  {path: '/cost-codes/...', component: CostCodes, name: 'Cost-Codes'},
  {path: '/cost-code-setup', component: CostCodesSetup, name: 'Cost-Code-Setup'},
  { path: '/gridExample', component: KendoGridContainer, name: 'GridExample'},
  { path: '/kendoSimple', component: KendoSimple, name: 'KendoSimple'},
  { path: '/uploadDemo', component: SimpleCostImportSetup, name: 'ImportSetup'},
  { path: '/form-validation', component: HeroFormComponent, name: 'HeroForm'}
  //{ path: '/subcontract/:id/...', component: SubcontractMain, name: 'SubcontractMain' }
])
export class App implements OnInit  {
  url: string = 'https://twitter.com/AngularClass';
  public name = '4Cast Project Cost Control';
  public projectName = 'Project 110001'
  public theProject: Object;

  constructor(public fourcast: FourcastService) {

  }

  ngOnInit(){

    this.fourcast.initProject()
    .subscribe((res)=>{
      this.theProject = res;
    })

  }


  // following has some interesting stuff from upstream master
  // leave it here as is in comments for later reference.
  // =======
  //   { path: '/', component: Home, name: 'Index' },
  //   { path: '/home', component: Home, name: 'Home' },
  //   // Async load a component using Webpack's require with es6-promise-loader
  //   { path: '/about', loader: () => require('./about/about')('About'), name: 'About' },
  //   { path: '/**', redirectTo: ['Index'] }
  // ])
  // export class App {
  //   angularclassLogo = 'assets/img/angularclass-avatar.png';
  //   name = 'Angular 2 Webpack Starter';
  //   url = 'https://twitter.com/AngularClass';
  //   constructor() {
  //
  //   }
  // >>>>>>> upstream/master



}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
