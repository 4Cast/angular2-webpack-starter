import {Injectable, Provider} from 'angular2/core';
import {FourcastService} from './fourcast-service.ts';
import * as Rx  from 'rxjs/Rx';



@Injectable()
export class CostImportService{


constructor(public fourcast: FourcastService){}

update(className: string, theEntity: Object){}

  updateCostImportHdr(costImport: CostImport, id?: string): Rx.Observable<any[]> {
      console.log("Cost Import: ", costImport, id);
      if(id){
        console.log(id);
        costImport['sourceData']={"ID": id};
      }

      return this.fourcast.update("costImportHeader", costImport);

    }


}

export class CostImport {
  public importDate: Date;
  private _period: number;
  public division: string
  public periodName: string;
  public importFileName: string;
  public isSupplierInvoices: boolean;
  public isPayrollWeekly: boolean;
  public isPayrollMonthly: boolean;
  public hello: string;

  constructor(){
    this.importDate = new Date();
    this.periodName = '';
    this.division = '';
    this.importFileName = '';
    this.isSupplierInvoices = false;
    this.isPayrollWeekly = false;
    this.isPayrollMonthly = false;
  }




  static typeNames=['Supplier Invoices', 'Payroll Weekly', 'Payroll Monthly']

}
