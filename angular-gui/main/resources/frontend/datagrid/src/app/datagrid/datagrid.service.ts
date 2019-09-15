import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector:    'data-grid-service',
  templateUrl: 'datagrid.service.html'
  //providers:  [ HeroService ]
})

@Injectable()
export class PrDataGridService {
   backendUrl: any;
   constructor(private http: HttpClient) {
     //const configuration = document.querySelector('#appConfigId');
     this.backendUrl = document.getElementById("appConfigId").getAttribute("data-backendUrl");
     //this.backendUrl = configuration.dataset.backendUrl;
     //alert("REMOTE = "+this.backendUrl);
  }
  getDataFromServer(){
    var remoteRowData = this.http.get(this.backendUrl);
    //alert(remoteRowData);
    return remoteRowData;
   }

}
