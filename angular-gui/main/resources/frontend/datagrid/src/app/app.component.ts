import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  // rowData: any;
  // constructor(private http: HttpClient) {
  //
  // }
  ngOnInit(): void {
    // this.rowData = this.http.get('http://localhost:8081/backend/griddata');
     //alert('AppComponent Started');
   }
  // title = 'Tour of Heroes';
  // columnDefs = [
  //   {headerName: 'Make', field: 'make',sortable: true},
  //   {headerName: 'Model', field: 'model',sortable: true},
  //   {headerName: 'Price', field: 'price',sortable: true}
  // ];
}
