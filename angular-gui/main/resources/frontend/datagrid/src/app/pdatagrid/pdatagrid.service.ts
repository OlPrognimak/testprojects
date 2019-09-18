///<reference path="../../../node_modules/@angular/core/core.d.ts"/>
import { HttpClient } from '@angular/common/http';
import {Directive, Injectable} from '@angular/core';


import { GridData } from '../domain/domain.car';


@Injectable()
export class PTableDataGridService {
  backendUrl:string;
  constructor(private http: HttpClient) {
    this.backendUrl = document.getElementById("appConfigId").getAttribute("data-backendUrl");
  }

  getDataFromServer() {
   return this.http.get(this.backendUrl)
      .toPromise()
      .then(res => <GridData[]> res)
      .then(data => { return data; });
  }


}
