
import {Injectable} from '@angular/core';

import {FourcastService} from './fourcast-service';
import * as Rx  from 'rxjs/Rx';

@Injectable()
export class SubcontractService{

public theSubcontract:Object;

constructor(public fourcastService: FourcastService){}

getSubcontractor(id:string){
  return this.fourcastService.getEntity('SCTR', id);
}

getSubcontract(id:string): Rx.Observable<any[]>{

    return this.fourcastService.getEntity('subcontract', id);

  }

getSubcontractList(): Rx.Observable<any[]>{
  let collectionName="subcontracts";
  return this.fourcastService.getCollectionForProject("subcontracts");
}

update(theSubcontract: Object): Rx.Observable<any[]> {
  return this.fourcastService.update("subcontract", theSubcontract)
}


}
