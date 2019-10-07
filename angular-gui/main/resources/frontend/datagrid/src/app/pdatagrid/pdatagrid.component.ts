import {TableModule} from 'primeng/table';
import {Component,OnInit} from "@angular/core";
import {PTableDataGridService} from "./pdatagrid.service";
import {GridData} from "../domain/domain.car";



@Component({
  selector:    'prime-data-grid',
  templateUrl: './pdatagrid.component.html',
  providers:  [ PTableDataGridService ]
})

export class PrimeDataGridComponent implements OnInit {
  title = 'Prime Data Grid';
  gridData: GridData[];
  expandedRows: any;

  constructor(private carService: PTableDataGridService) { }

  ngOnInit() {
    this.carService.getDataFromServer().then(gridData => this.gridData = gridData);
  }
}


