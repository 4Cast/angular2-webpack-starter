export class CostImport {
  public importDate: Date;
  private _period: number;
  public division: string
  public periodName: string;
  public importFileName: string;
  public isSupplierInvoices: boolean;
  public isPayrollWeekly: boolean;
  public isPayrollMonthly: boolean;

  constructor(){
    this.importDate = new Date();
    this.periodName = '';
    this.division = '';
    this.importFileName = '';
    this.isSupplierInvoices = false;
    this.isPayrollWeekly = false;
    this.isPayrollMonthly = false;
  }

  processImport(id:string){
    
  }

  static typeNames=['Supplier Invoices', 'Payroll Weekly', 'Payroll Monthly']

}
