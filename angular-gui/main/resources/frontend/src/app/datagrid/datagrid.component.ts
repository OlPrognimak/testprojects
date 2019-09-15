import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {PrDataGridService} from "./datagrid.service";
import { AgGridAngular } from 'ag-grid-angular';
import {logger} from "codelyzer/util/logger";


@Component({
  selector:    'pr-data-grid',
  templateUrl: './datagrid.component.html',
  providers:  [ PrDataGridService ]
})

export class DataGridComponent implements OnInit,AfterViewInit{

  rowData: any;
  documentIsLoaded:boolean = false;

  constructor( private dataGridService: PrDataGridService) {

   }

  ngOnInit(): void {
    alert('Start DataGridComponent');
    this.rowData = this.dataGridService.getDataFromServer();


    document.onloadend = function () {
      alert("Documet is Loaded");

    }
  }





  title = 'Tour of Heroes';
  @ViewChild('agGrid', { static: false, }) agGrid: AgGridAngular;
  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true,checkboxSelection: true, editable: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true, editable: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true, editable: true}
  ];


  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onRowValueChanged(event) {
    console.log(`Changed Values = ${event.node.changedValues.join(',')}`);
    alert(`Changed Values = ${event.node.changedValues.join(',')}`);
    // do validations
  }




  cellChanged(event) {
    alert(`New Values = ${event.newValue}  : Old Value = ${event.oldValue}`);
    // do validations
  }



  getSelectedDataSize(){
    if(this.documentIsLoaded===true){
      return this.agGrid.api.getSelectedNodes().length;
    }else{
      return 0;
    }

  }


  getSelectedData(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
   logger.info("Call Selected Data :"+selectedData.toString());
    return selectedData;
  }

  ngAfterViewInit(): void {
    this.documentIsLoaded=true;
  }


}
