import {Component, OnInit} from 'angular2/core';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';


const TEMPLATE: string = require('./fileUploadDemo.html');

const URL = 'http://127.0.0.1:8081/rest/$upload';

@Component({
  selector: 'simple-demo',
  template: TEMPLATE,
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CostImportSetup implements OnInit {
  private uploader:FileUploader = new FileUploader({url: URL});

  private hasBaseDropZoneOver:boolean = false;
  private hasAnotherDropZoneOver:boolean = false;



  private fileOverBase(e:any) {
    this.hasBaseDropZoneOver = e;
  }

  private fileOverAnother(e:any) {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit(){
      console.log(this.uploader);
  }
}
