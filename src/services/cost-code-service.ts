
import {Injectable, Provider} from '@angular/core';
import {FourcastService} from './fourcast-service';
import * as Rx  from 'rxjs/Rx';
import {Http} from "@angular/http";

@Injectable()
export class CostCodeService extends FourcastService{

public theCostCode:Object;

constructor(http: Http){
  super(http);
}

getSubcontractor(id:string){
  return this.getEntity('SCTR', id);
}

getSubcontract(id:string): Rx.Observable<any[]>{

    return this.getEntity('subcontract', id);

  }

getSubcontractList(): Rx.Observable<any[]>{
  let collectionName="subcontracts";
  return this.getCollectionForProject("subcontracts");
}

updateCostCode(theCostCode: Object): Rx.Observable<any[]> {
  console.log('Cost code service - update', theCostCode);
  return this.update("costCode", theCostCode);
}


}
