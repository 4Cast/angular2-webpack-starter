import {Component, OnInit, ElementRef,} from '@angular/core';
import {FileSelect} from './file.select';
import {NgIf} from '@angular/common';
import {NgForm}    from '@angular/common';
import {CostImport, CostImportService} from '../../../services/cost-import-service';
import {FourcastService} from '../../../services/fourcast-service';
import {FileUploader} from './file-uploader';
import {FileItem} from './file-uploader';




const TEMPLATE: string = require('./simple.import.setup.html');

const URL = 'http://127.0.0.1:8081/rest/$upload';

@Component({
  selector: 'simple-demo',
  template: TEMPLATE,
  directives: [FileSelect],
  styles: [`

    .active {
      background-color: red;
   }
    .disabled {
      color: gray;
      border: medium solid gray;
    }
  `],
  providers: [FileUploader, CostImportService, FourcastService]
})

export class SimpleCostImportSetup implements OnInit {

isOn = true;
isDisabled = false;
importId: string;
private _file: File;
public isUploaded: boolean = false;

constructor( uploader: FileUploader, public importService: CostImportService){}

public isFileSelected: boolean = false;
typeNames = CostImport.typeNames;
model: CostImport = new CostImport();

  ngOnInit(){
    this.model.division = ''
  }

onFileSelected(event){
  console.log('File selected', event);
  this._file = event['file'];
  this.isFileSelected = true
  this.model.importFileName = this._file.name;
  //console.log('File selected 2: ', this.model.importFileName)
}

updateCostImport(fileId:string){
  console.log('FileId (update): ', fileId)
  this.importService.updateCostImportHdr(this.model, fileId)
  .subscribe((res) =>{
    var temp = JSON.stringify(res);
    console.log("Update cost import header result: ",res);
    this.importId = res['id'];
    this.isUploaded = true;
    //console.log('File content: ', text);
  });
}

processCostImport(importId:string){



}

onImportFileClicked(){
  console.log("Button clicked");

  let uploader = new FileUploader();
  uploader.uploadFile(this._file);
  uploader.emitter.subscribe((data) => {
    console.log("Upload event: ", data);
    let response = JSON.parse(data['response']);
    let fileId = response['ID'];
    console.log('FileId (clicked): ', fileId)
    this.updateCostImport(fileId);

  });
  //this.uploadFile(this._file);
}

onImportTypeChange(event){
  this.model.isSupplierInvoices = false;
  this.model.isPayrollWeekly = false;
  this.model.isPayrollMonthly = false;
  switch (true){
    case event.target[0].selected:
      this.model.isSupplierInvoices = true;
      break;

    case event.target[1].selected:
      this.model.isPayrollWeekly = true;
      break;

    case event.target[2].selected:
      this.model.isPayrollMonthly = true;
      break;
    }
  }

testUpdate(){

  let url:string = "http://127.0.0.1:8081/processImport";
  let xhr=new XMLHttpRequest();
  let formdata=new FormData();
  formdata.append('ID',this.importId);
  xhr.addEventListener("load", function (evt) {
    let responseStr = evt.currentTarget['response'];
    let res = JSON.parse(responseStr);
    let id = res['ID'];
    console.log("Response: ", res['ID']);
    nextStep(id);
  })

  xhr.open('POST', url, true);
  xhr.send(formdata);

  function nextStep(id: string){
    let url:string = "http://127.0.0.1:8081/processData";
    let xhr=new XMLHttpRequest();
    let formdata=new FormData();
    formdata.append('ID',id);
    xhr.addEventListener("load", function (evt) {
      console.log(evt);
    })

    xhr.open('POST', url, true);
    xhr.send(formdata);

  }
}


}
