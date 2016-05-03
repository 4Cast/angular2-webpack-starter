
import {Injectable} from '@angular/core';

import {FourcastService} from '../../services/fourcast-service';

@Injectable()
export class Project{
static project:any;
static projectId: string;

  id: String;
  projectNumber: String;
  projectName: String;
  dateStart: Date;
  dateScheduleFinish: Date;


  constructor(data?:any){
    if(data){
      if(data.hasOwnProperty('id')){this.id = data['id']}
      if(data.hasOwnProperty('projectNumber')){this.id = data['projectNumber']}
      if(data.hasOwnProperty('projectName')){this.id = data['projectName']}
      if(data.hasOwnProperty('dateStart')){this.id = data['dateStart']}
      if(data.hasOwnProperty('dateScheduleFinish')){this.id = data['dateScheduleFinish']}

  }
  }



}
