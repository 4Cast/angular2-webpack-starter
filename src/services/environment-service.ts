
import {Injectable, provide} from "@angular/core";


@Injectable()
export class EnvironmentService {

projectId: string;

constructor (){
    //this.theProjectId = '6AD1EE2808C242D3BA580C24A2E76B67';
  }

  setProjectId(id:string){
    this.projectId = id;
  }

  getProjectId(){
    return this.projectId
  }
}
