
//className:String, keyField?:String, id?:String, orderByField?: String
export class ViewDefinition{
  className: string;
  keyField: string;
  id: string;
  orderByField: string;
  isProjectBased: boolean;
  detailRoute: string;
  columnDefs: KendoColumn[];

  constructor(){
    this.isProjectBased = false;
  }

}

export class KendoColumn {
  title: string;
  field: string;
  width: number;
  filterable: boolean;
  hidden: boolean;

  constructor(title: string, field: string, width:number, filterable?: boolean ){
    this.title = title;
    this.field = field;
    this.width = width;
    if(filterable){this.filterable = filterable;}
      else{  this.filterable = false;}

    this.hidden = false;
  }
  //{ title: "Project Number", field: "projectNumber", width:80, filterable: false, hidden: false},
}
