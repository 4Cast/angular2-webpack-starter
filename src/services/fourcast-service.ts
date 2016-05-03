import {Injectable, provide} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Headers, RequestOptions} from '@angular/http';

import * as Rx  from 'rxjs/Rx';
import {ViewDefinition} from './view-definition'
import {CostImport} from '../app/class.definitions/cost-import';
import {Project} from '../app/class.definitions/project';


//import {Promise} from "@angular/src/core/facade/async";


/**
 * FourcastService works querying the fourcast Web API
 * https://developer.fourcast.com/web-api/
 */



@Injectable()
export class FourcastService {

static theProject: any = {};

public theSubcontract:Object = {};

public theSubcontractList: any[] = [];
public theSubcontractor: Object = {};
public theSctrContact: Object = {};
public theCostCode: Object = {};

public theList: any[] = [];
public theEntity: Object = {};
private fourcastUrl: string;
private _projectId: string = '39A42D1AC14C4543A8FF59F314415A3A'; //default project Id for testing.
// when user logs in, this will be overwritten

  constructor(public http: Http) {

    // this is a temporary measure for storing projectId as a static var
    // We don't want to set the project id everytime we instantiate this fourcast service
    // Although when everything is working properly, this should be a singleton class.

    if(!Project.projectId){
      Project.projectId = this._projectId;
    }



  }

  initProject(): Rx.Observable<any>{
    let id = '39A42D1AC14C4543A8FF59F314415A3A'
    return this.getEntity('project', id);

  }

  setUrl(url:string){
    this.fourcastUrl = url;
  }

  getUrl(){
    // hard code the url just for the moment
    this.fourcastUrl = "http://127.0.0.1:8081/rest/";
    return this.fourcastUrl;
  }

  setProjectId(id:string){
    this._projectId = id;
  }

  getProjectId(){
    // hard code the project Id for the moment
    this._projectId = '6AD1EE2808C242D3BA580C24A2E76B67';
    return this._projectId;
  }

''
search(query: string): Rx.Observable<any[]> {

    return this.http.get(this.getUrl()+'Projects')
       .map((res: Response) => res.json())  // make json
       .map((res) => res['__ENTITIES']);
     // obs.map((res) => String(res))
     // obs.map((res) => JSON.parse(res));


  }

getEntity( className: String, id:String): Rx.Observable<any[]>{
  let base_url = this.getUrl();
  let url: string = base_url + className +"("+id+")";
  console.log('getEntity, url: '+url);
  return this.http.get(url)
    .map((res:Response) => res.json());
}

//className:String, keyField?:String, id?:String, orderByField?: String

getCollection(viewDefinition:ViewDefinition): Rx.Observable<any[]>{

  if(viewDefinition.isProjectBased){
    return this.getProjectCollection(viewDefinition);
  }
  else{
  let base_url = this.getUrl();

  let url = base_url + viewDefinition.className +"/";
  let addQuestionMark: boolean = true;
  let keyField =viewDefinition.keyField;
  let orderByField =  viewDefinition.orderByField;

  if(keyField!='' && keyField){
    if(addQuestionMark){
        url += '?';
        addQuestionMark = false;
    };
    url += '$filter="'+keyField+'='+viewDefinition.id+'"'
  }
  if(orderByField!='' && orderByField){
    if(addQuestionMark){
        url += '?';
        addQuestionMark = false;
    };
    url += '&$orderBy="'+orderByField+' ASC'+'"';
    console.log('order by found:',url);
  }
  return this.http.get(url)
  .map((res: Response) => res.json());
}
}

getProjectCollection(viewDefinition:ViewDefinition): Rx.Observable<any[]>{
  let url = this.getUrl() +"project("+this._projectId+")";
  url += "/"+viewDefinition.className+"?$expand="+viewDefinition.className;
  return this.http.get(url)
  .map((res: Response) => res.json());
}

getProject(id:string): Rx.Observable<any[]>{
  console.log('getProject, id: '+id)
  return this.getEntity('project', id);
  }

getProjectsList(): Rx.Observable<any[]>{
  let viewDefinition = new ViewDefinition();
  viewDefinition.className = 'project';
  viewDefinition.orderByField = "projectNumber";

  return this.getCollection(viewDefinition);

}

getCollectionForProject(collectionName): Rx.Observable<any[]>{
  let url = this.getUrl()+"project("+this._projectId+")";
  url += "/"+collectionName+"?$expand="+collectionName
  console.log(url);
  return this.http.get(url)
  .map((res: Response) => res.json());
}

getProjectPaletteList():Rx.Observable<any[]>{

  let url = this.getUrl();
  url += "project";
  url += "/?$orderBy=projectNumber,"
  +"id,"
  +"projectName,"
  +"projectNumber";
  return this.http.get(url)
    .map((res: Response) => res.json());
  }



    update(className: string, theEntity: Object): Rx.Observable<any[]>{
      console.log('Fourcast Service - update.');
      let body = JSON.stringify(theEntity);
      console.log('Body', body);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let url =  this.getUrl()+className+"/?$method=update"
      console.log('Fourcast Service - update, url:',url)
      return this.http.post(url, body, options)
                    .map((res: Response) => res.json());
    }

    updateProject(theProject: Object): Rx.Observable<any[]> {

      let body = JSON.stringify(theProject);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let url =  this.getUrl()+"project/?$method=update"
      return this.http.post(url, body, options)
                    .map((res: Response) => res.json());

    }


  get(className: string, id: string){
    let url = this.getUrl()+className+"("+id+")";
    return this.http.get(url)
    .map((res: Response) => res.json());
  }

  getSubcontractor(id:string){

    let url = this.getUrl()+"SCTR("+id+")";
    console.log(url);
    return this.http.get(url)
    .map((res: Response) => res.json());

  }

  getContactForSubcontract(id:String){
    let url = this.getUrl();
    url += 'subcontract('+id+')/?$expand=contact';
    console.log('FourcastService – getContactForSubcontract, url: '+url);
    return this.http.get(url)
      .map((res:Response) => res.json());
  }

  getSctrContact(id:string){

    let url = this.getUrl()+"scct("+id+")";
    console.log(url);
    return this.http.get(url)
    .map((res: Response) => res.json());
  }

  getCostCode(id:string){
    return this.getRecord(id, 'ccod');
  }

  getRecord(id:string, className:string){
    let url = this.getUrl()+className+"("+id+")";
    console.log(url);
    return this.http.get(url)
    .map((res: Response) => res.json());
  }



query(URL: string, id?: string, params?: Array<string>): void {
    let base_url = this.getUrl();
    let queryURL: string = `${base_url}${URL}`
    if (id) {
      queryURL = `${queryURL}\(${id}\)`;
    }
    if (params) {
      queryURL = `${queryURL}?${params.join("/")}`;
    }

    //return this.http.get(queryURL).toPromise();
  }

getList(className:string, projectId?: string){
    let url = this.getUrl();

}

updateUser(user: Object): void {

    let userString: string = JSON.stringify(user);
    let updateURL = this.getUrl()+'Users/?$method=update';
    //return this.http.post(updateURL, userString).toPromise();
  }

getUser(id: string): void {
    //return this.query(`/artists/${id}`);
  //  return this.query("User", id);
  }


}



class Subcontract {
  __KEY: string;
  __STAMP: number;
  amt_contractOriginal: number;

  constructor(data: Object){
    this.__KEY = data['__KEY'];
    this.__STAMP =  data['__STAMP'];
    this.amt_contractOriginal = data['amt_contractOriginal'];
  }
}



export var fourcast_PROVIDERS: Array<any> = [
  provide(FourcastService, {useClass: FourcastService})
];
