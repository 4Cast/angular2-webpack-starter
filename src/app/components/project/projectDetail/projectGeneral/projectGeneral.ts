
/*
 * Angular
 */

 import {Component} from 'angular2/core';
 import {NgForm}    from 'angular2/common';
 import {RouteData} from 'angular2/router';
 import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from "angular2/common";
 import {FourcastService} from "../../../../../services/fourcast-service";
 import {MyDatePicker} from '../../../widgets/my-date-picker/mydatepicker';
 import {KendoDatePicker} from '../../../kendo/kendo-date-picker';


/*
 * Services
 */


const DETAIL_TEMPLATE = require('./projectGeneral.html');

@Component({

  selector: "project-detail-general",
  template: DETAIL_TEMPLATE,
  directives: [MyDatePicker, KendoDatePicker]

})

//template: '<p>Details</p>'

export class ProjectGeneral  {
  project: Object = {};
  submitted = false;

  private myDatePickerOptions = {
      todayBtnTxt: 'Today',
      dateFormat: 'dd.mm.yyyy',
      firstDayOfWeek: 'mo',
      sunHighlight: true,
      height: '34px',
      width: '260px'
  };
  dateStartString: string;
  dateScheduleFinishString: string;


  constructor(public fourcast: FourcastService, data: RouteData) {

    this.project = fourcast.theEntity;
    this.dateStartString = '21.12.2015';

      if(!this.project.hasOwnProperty('id')){
        this.project['id']='';
        this.project['projectNumber']='';
        this.project['projectName']='';
        this.project['dateStart']=new Date();
        this.project['dateScheduleFinish']=new Date()};

        console.log(this.project['dateStart']);

        this.dateStartString = this.dateToString(this.project['dateStart'])
        this.dateScheduleFinishString = this.dateToString(this.project['dateScheduleFinish']);


    // this.nameInput=this.myForm.controls['projectName'];
    // this.numberInput=this.myForm.controls['projectNumber'];
  }



  onSubmit(value) {
    this.submitted = true;

  }

  dateToString(theDateString: string): string{
    let internalDate: Date = new Date(theDateString);
    let year: Number = internalDate.getFullYear();
    let month: Number = internalDate.getMonth()+1;
    let day: Number = internalDate.getDate();

    let monthStr = month.toString();
    if(month<10){monthStr="0"+monthStr};

    let dayStr = day.toString();
    if(day<10){dayStr="0"+dayStr}


    let dateArray = [dayStr,monthStr,year];
    theDateString = dateArray.join(".");

    return theDateString;
  }

  onDateChanged(dateName,event){

    let epoch:number = event['epoc'];
    let newDate = new Date(epoch*1000);
    console.log(dateName);
    console.log(newDate);
    this.project[dateName] = newDate;
    console.log(this.project[dateName]);


  }

}
