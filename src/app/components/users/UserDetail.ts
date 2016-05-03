/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular
 */
import {Component, View, OnInit, NgIf} from "@angular/angular2";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "@angular/angular2";
import {Response} from "@angular/http";
import {RouteParams, RouterLink, LocationStrategy} from "@angular/router-deprecated";

/*
 * Services
 */
import {fourcastService} from "../../services/fourcastService";

@Component({
  selector: "userDetail"
})
@View({
  directives: [RouterLink, NgIf, FORM_DIRECTIVES],
  template: `
  <div>
    <h2>User Detail</h2>
    <p><a href (click)="back()">Back</a></p>


    <form [ng-form-model]="myForm"
          (submit)="onSubmit(myForm.value)">

      <div class="form-group" [class.has-error]="!familyNameInput.valid && familyNameInput.touched">
        <label for="familyNameInput">Family Name</label>
        <input type="text"
               class="form-control"
               id="familyNameInput"
               placeholder="Family Name"
               [ng-form-control]="myForm.controls['familyName']"
               [(ng-model)]="familyName">
      </div>

        <div class="form-group" [class.has-error]="!givenNameInput.valid && givenNameInput.touched">
        <label for="givenNameInput">Given Name</label>
        <input type="text"
               class="form-control"
               id="givenNameInput"
               placeholder="Given Name"
               [ng-form-control]="myForm.controls['givenName']"
               [(ng-model)]="givenName">
      </div>

      <button type="submit" class="btn btn-default" *ng-if="!myForm.valid" disabled="disabled">Submit</button>
      <button type="submit" class="btn btn-default" *ng-if="myForm.valid" >Submit</button>
    </form>
    <div *ng-if="familyNameInput.hasError('required') && familyNameInput.touched" class="bg-warning">The family name is required.</div>
    <div *ng-if="givenNameInput.hasError('required') && givenNameInput.touched" class="bg-warning">The given name is required.</div>
  </div>


  `
})
export class UserDetail implements OnInit {
  id: string;
  user: Object;
  familyName: string;
  givenName: string;
  myForm: ControlGroup;
  familyNameInput: AbstractControl;
  givenNameInput: AbstractControl;

  constructor(public routeParams: RouteParams,
              public fourcast: fourcastService,
              public locationStrategy: LocationStrategy,
              fb: FormBuilder) {
    this.id = routeParams.get("id");
    this.myForm = fb.group({
      "familyName": ["", Validators.required],
      "givenName": ["", Validators.required]
    });

    this.familyNameInput=this.myForm.controls['familyName'];
    this.givenNameInput=this.myForm.controls['givenName'];
  }

  onSubmit(value) {
    if(!this.user){
      this.user={};
    }

    this.user['familyName']=value.familyName;
    this.user['givenName'] = value.givenName;
    //this.fourcast.updateUser(this.user).then(this.handleResponse.bind(this));
    console.log('onSubmit');
  }

  handleResponse(res: Response): void {
    console.log('Response Received', res)
    this.back();
  }

  ngOnInit(): void {
    if(this.id!=''){
      //this.fourcast.getUser(this.id).then(this.renderUser.bind(this));
    }

  }

  back(): void {
    this.locationStrategy.back();
  }


  renderUser(res: Response, fb: FormBuilder): void {
        this.user = res.json();


        this.familyName =this.user['familyName'];
        this.givenName = this.user['givenName'];
        //this.myForm.value.projectName = p;
        //console.log('The value is now: ',this.myForm.value);

  }
}
