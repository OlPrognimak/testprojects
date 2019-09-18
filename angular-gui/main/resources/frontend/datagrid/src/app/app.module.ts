import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';
import {DataGridComponent} from "./datagrid/datagrid.component";
import {PrDataGridService} from "./datagrid/datagrid.service";
import {PrimeDataGridComponent} from "./pdatagrid/pdatagrid.component";
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    PrDataGridService,
    PrimeDataGridComponent

  ],
  imports: [
    AgGridModule.withComponents(null), BrowserModule,HttpClientModule,TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
