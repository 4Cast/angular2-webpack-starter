
/*
 * Angular
 */

import {Component, View, OnInit} from "@angular/core";
import {NgIf} from "@angular/common";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "@angular/common";
import {Response} from "@angular/http";
import {RouteParams, Router, RouterLink, LocationStrategy} from "@angular/router-deprecated";


/*
 * Services
 */
import {FourcastService} from "../../../services/fourcast-service";

@Component({
  selector: "projectDetail",
  providers: [FourcastService]
})
@View({
  directives: [RouterLink, NgIf, FORM_DIRECTIVES],
  template: `
  <div>
    <h2>Project Detail</h2>
    <p> <a [routerLink]="['../List']">Back to list</a>
    <!--<p><a href (click)="back()">Back</a></p>-->


    <form [ngFormModel]="myForm"
          (submit)="onSubmit(myForm.value)">

      <div class="form-group" [class.has-error]="!nameInput.valid && nameInput.touched">
        <label for="nameInput">Project Name</label>
        <input type="text"
               class="form-control"
               id="nameInput"
               placeholder="Project Name"
               [ngFormControl]="myForm.controls['projectName']"
               [(ngModel)]="projectName">
      </div>

        <div class="form-group" [class.has-error]="!numberInput.valid && numberInput.touched">
        <label for="numberInput">Project Number</label>
        <input type="text"
               class="form-control"
               id="numberInput"
               placeholder="Project Number"
               [ngFormControl]="myForm.controls['projectNumber']"
               [(ngModel)]="projectNumber">
      </div>

      <button type="submit" class="btn btn-default" *ngIf="!myForm.valid" disabled="disabled">Submit</button>
      <button type="submit" class="btn btn-default" *ngIf="myForm.valid" >Submit</button>
    </form>
    <div *ngIf="nameInput.hasError('required') && nameInput.touched" class="bg-warning">The project name is required.</div>
    <div *ngIf="numberInput.hasError('required') && numberInput.touched" class="bg-warning">The project number is required.</div>
  </div>


  `
})
export class ProjectDetail implements OnInit {
  id: string;
  project: Object;
  projectName: string;
  projectNumber: string;
  myForm: ControlGroup;
  nameInput: AbstractControl;
  numberInput: AbstractControl;

  constructor(public routeParams: RouteParams,
              public fourcast: FourcastService,
              public locationStrategy: LocationStrategy,
              public router: Router,
              fb: FormBuilder) {
    this.id = routeParams.get("id");
    this.myForm = fb.group({
      "projectName": ["", Validators.required],
      "projectNumber": ["", Validators.required]
    });

    this.nameInput=this.myForm.controls['projectName'];
    this.numberInput=this.myForm.controls['projectNumber'];
  }

  onSubmit(value) {
    if(!this.project){
      this.project={};
    }

    this.project['projectName']=value.projectName;
    this.project['projectNumber'] = value.projectNumber;
    this.fourcast.updateProject(this.project)
     .subscribe((res) =>{
       var temp = JSON.stringify(res);
       console.log(temp);
     });
    console.log('onSubmit');
  }

  handleResponse(res: Response): void {
    console.log('Response Received', res)
    this.back();
  }

  ngOnInit(): void {
    if(this.id!=''){
      this.fourcast.getProject(this.id)
      .subscribe((res) =>{
        this.project = res;
        this.projectName =this.project['projectName'];
        this.projectNumber = this.project['projectNumber'];
      })
    }

  }

  back(): void {
    this.router.navigate(['../List'])
  }


  renderProject(res: Response, fb: FormBuilder): void {
        this.project = res.json();


        this.projectName =this.project['projectName'];
        this.projectNumber = this.project['projectNumber'];
        //this.myForm.value.projectName = p;
        //console.log('The value is now: ',this.myForm.value);

  }
}
