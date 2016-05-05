
import {Injectable, EventEmitter} from '@angular/core';
import {XMLtoJSON} from "../../../services/xml-to-json";

export class FileItem {
  id: string;
  status: number;
  statusText: string;
  progress: Object;
  fileName: string;

  size: number;
  response: string;
  done: boolean;
  error: boolean;
  abort: boolean;

  constructor(fileName: string, size: number) {

    this.fileName = fileName;
    this.size = size;
    this.progress = {
      loaded: 0,
      total: 0,
      percent: 0
    };
    this.done = false;
    this.error = false;
    this.abort = false;
  }

  setProgres(progress: Object): void {
    this.progress = progress;
  }

  setError(): void {
    this.error = true;
    this.done = true;
  }

  setAbort(): void {
    this.abort = true;
    this.done = true;
  }

  onFinished(status: number, statusText: string, response: string): void {
    this.status = status;
    this.statusText = statusText;
    this.response = response;
    this.done = true;
  }
}


export class FileUploader {
  url:string = "http://127.0.0.1:8081/rest/$upload?$binary=true";

public emitter: EventEmitter<any> = new EventEmitter(true);

  uploadFile(file: any): void {
    console.log("File Uploader – Upload File");
    let reader =  new FileReader();
    let xhr = new XMLHttpRequest();
    let form = new FormData();
    form.append("import document", file, file.name);

    let thisFile = new FileItem(

        file.name,
        file.size
    );

    xhr.upload.onprogress = (e) => {

      if (e.lengthComputable) {
        let percent = Math.round(e.loaded / e.total * 100);
        thisFile.setProgres({
          total: e.total,
          loaded: e.loaded,
          percent: percent
        });

      //  this.emitter.emit(thisFile);
      }
    }

    xhr.upload.onabort = (e) => {
      thisFile.setAbort();
      this.emitter.emit(thisFile);
    }

    xhr.upload.onerror = (e) => {
      thisFile.setError();
      this.emitter.emit(thisFile);
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        thisFile.onFinished(
            xhr.status,
            xhr.statusText,
            xhr.response
        );

        this.emitter.emit(thisFile);
      }
    }

    xhr.open('POST', this.url, true);
    //xhr.withCredentials = this.withCredentials;

    // if (this.customHeaders) {
    //   Object.keys(this.customHeaders).forEach((key) => {
    //     xhr.setRequestHeader(key, this.customHeaders[key]);
    //   });
    // }

    // if (this.authToken) {
    //   xhr.setRequestHeader("Authorization", `${this.authTokenPrefix} ${this.authToken}`);
    // }
    reader.onload = function(evt) {
        xhr.send(evt.target['result']);
      };

      reader.readAsBinaryString(file);

  }

}
