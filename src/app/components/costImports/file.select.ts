
import { Component, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';
import {NgIf, NgClass} from '@angular/common';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable}     from 'rxjs/Observable';
import {FileItem} from './file-item';
// todo: filters

//const TEMPLATE = require('./file-select.html');
const TEMPLATE = require('./fileinput.html');
var activeStyle = ".active {background-color: red;} .disabled {color:grey}";
var disabledSytle = ".disabled {color:grey}";
const STYLES = [activeStyle];

@Component({
  selector: 'file-select',
  template: TEMPLATE,
  styles: STYLES

})
export class FileSelect implements OnInit{
  isFileSelected: boolean = false;
  isFileNotSelected: boolean = true;
  file: File;
  isOn = true;
  isDisable = false

  @Output() fileSelected: EventEmitter<FileItem> = new EventEmitter();

  constructor(private element:ElementRef) {

  }

ngOnInit(){
  console.log("Element Ref: ",this.element)
}

  onChange(evt) {
    // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
    let files = evt.target.files;
    if (files.length>0)
      {
        this.isFileSelected = true;
        this.isFileNotSelected = false;
        let fileItem = new FileItem(this.isFileSelected, files[0]);
        this.fileSelected.emit(fileItem);
      };
    this.file = files[0];


    console.log("file-select onChange ", this.file.type);
    // if(!this.uploader.isHTML5) this.destroy();

  }

  uploadFile(){
    console.log("Upload file");
    let xhr = new XMLHttpRequest();
    let form = new FormData();
    let url = "http://127.0.0.1:8081/rest/$upload?$binary=true"
    form.append(this.file, this.file.name);

    console.log("xhr ",xhr);

    xhr.upload.onerror = (e) => {
      console.log("An error occurred.")
    }


    console.log("xhr ",xhr);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log("result ",xhr.response);
    }
}
    console.log("xhr ",xhr);

    xhr.open("POST", url, true);
    xhr.send(form);

  }
}

//export const fileUpload:Array<any> = [FileSelect];
