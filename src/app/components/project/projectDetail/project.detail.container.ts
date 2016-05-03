

/*
 * Angular
 */
import {Component} from "@angular/core";
import {NgIf} from '@angular/common';
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink,
  RouteParams, OnActivate, ComponentInstruction
} from "@angular/router-deprecated";

import {Response} from "@angular/http";
import {FourcastService} from "../../../../services/fourcast-service";
//import {Project} from "../../../class.definitions/project";

import {ProjectGeneral} from './projectGeneral/projectGeneral';
import {ProjectPreferences} from './project.preferences/project.preferences';
import {ProjectSuper} from './project-super/project-super';

// import {subcontractSummary} from "./summary";
// import {subcontractDetails} from "./details";
// import {ContractTerms} from "./contractTerms/contractTerms";
// import {Blank} from "../../components/blank";
// import {bgContainer} from "./bank-guarantee/bg-container";
// import {cashRetention} from "./cashRetention/cashRetention";
// import {Documents} from "./documents/documents";
// import {Scope} from './scope/scope';

const MAIN_TEMPLATE = require('./project.detail.container.html');

@Component({
  selector: "project-detail-container",
  directives: [RouterOutlet, RouterLink],
  template: MAIN_TEMPLATE,
  providers: [FourcastService]

})
@RouteConfig([
  { path: '/',            redirectTo: ['General'] },
  { path: '/general', name: 'General', component: ProjectGeneral, useAsDefault: true},
  //{ path: '/preferences', name: 'Preferences', component: ProjectPreferences},
  //{ path: '/superintendant', name: 'Super', component: ProjectSuper}
 // { path: '/detail', name: 'Detail', component: subcontractDetails},
 // { path: 'bank-guarantee', name: 'BankGuarantee', component: bgContainer},
 // { path: 'cash-retention', name: 'CashRetention', component: cashRetention},
 // { path: '/terms', name: "ContractTerms", component: ContractTerms},
 // { path: '/documents', name: 'Documents', component: Documents},
 // { path: '/scope', name: 'Scope', component: Scope}
//  { path: '/draggable',     as: 'Draggable',     component: DragElement}
])


export class ProjectDetailContainer implements OnActivate  {

  id: string;
  project: Object = {};


  constructor(
    private _routeParams: RouteParams,
    public router: Router,
    public fourcast: FourcastService) {
    }


  routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){

    return new Promise((resolve)=>{
      console.log('Promise resolve');
      this.id =to.params['id'];
      if(this.id && this.id!=''){
        console.log('Project detail component - This.id: '+this.id);
        this.fourcast.getProject(this.id)
        .subscribe((res) =>{

          this.project = res;
          console.log('Project Detail Component - result received');
          console.log('Post costs ',this.project['pref_postCosts']);
          console.log('Router: ', this.router);

          this.fourcast.theEntity = this.project;
            resolve(true);
        })
      }

      else {
        resolve(true);
        this.fourcast.theEntity = this.project;

      }

    })
  }

  goToPage(pageName: string){
      this.router.navigate( [pageName]);
  }

  ngOnInit(): void {


  }

  updateProject(){
    console.log("update project", this.project);
    this.fourcast.updateProject(this.project)
    .subscribe((res) =>{
      // this.project = res;
      // console.log('update project result', res);
      this.goBackToList();
  })
}

  goBackToList(){
    this.router.navigate(['../List'])
  }
}
