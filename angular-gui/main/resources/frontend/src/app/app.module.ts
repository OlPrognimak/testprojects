import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';
import {DataGridComponent} from "./datagrid/datagrid.component";
import {PrDataGridService} from "./datagrid/datagrid.service";

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    PrDataGridService

  ],
  imports: [
    AgGridModule.withComponents(null), BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
