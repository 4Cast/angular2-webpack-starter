/// <reference path="../../../typings/_custom.d.ts" />
/*
 * Angular
 */
import {Component, View, OnInit, NgIf} from "angular2/angular2";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "angular2/angular2";
import {Response} from "angular2/http";
import {RouteParams, RouterLink, LocationStrategy} from "angular2/router";

/*
 * Services
 */
import {fourcastService} from "../../services/fourcastService";

@Component({
  selector: "projectDetail"
})
@View({
  directives: [RouterLink, NgIf, FORM_DIRECTIVES],
  template: `
  <div>
    <h2>Project Detail</h2>
    <p><a href (click)="back()">Back</a></p>


    <form [ng-form-model]="myForm"
          (submit)="onSubmit(myForm.value)">

      <div class="form-group" [class.has-error]="!nameInput.valid && nameInput.touched">
        <label for="nameInput">Project Name</label>
        <input type="text"
               class="form-control"
               id="nameInput"
               placeholder="Project Name"
               [ng-form-control]="myForm.controls['projectName']"
               [(ng-model)]="projectName">
      </div>

        <div class="form-group" [class.has-error]="!numberInput.valid && numberInput.touched">
        <label for="numberInput">Project Number</label>
        <input type="text"
               class="form-control"
               id="numberInput"
               placeholder="Project Number"
               [ng-form-control]="myForm.controls['projectNumber']"
               [(ng-model)]="projectNumber">
      </div>

      <button type="submit" class="btn btn-default" *ng-if="!myForm.valid" disabled="disabled">Submit</button>
      <button type="submit" class="btn btn-default" *ng-if="myForm.valid" >Submit</button>
    </form>
    <div *ng-if="nameInput.hasError('required') && nameInput.touched" class="bg-warning">The project name is required.</div>
    <div *ng-if="numberInput.hasError('required') && numberInput.touched" class="bg-warning">The project number is required.</div>
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
              public fourcast: fourcastService,
              public locationStrategy: LocationStrategy,
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
    //this.fourcast.updateProject(this.project).then(this.handleResponse.bind(this));
    console.log('onSubmit');
  }

  handleResponse(res: Response): void {
    console.log('Response Received', res)
    this.back();
  }

  ngOnInit(): void {
    if(this.id!=''){
      //this.fourcast.getProject(this.id).then(this.renderProject.bind(this));
    }

  }

  back(): void {
    this.locationStrategy.back();
  }


  renderProject(res: Response, fb: FormBuilder): void {
        this.project = res.json();


        this.projectName =this.project['projectName'];
        this.projectNumber = this.project['projectNumber'];
        //this.myForm.value.projectName = p;
        //console.log('The value is now: ',this.myForm.value);

  }
}
