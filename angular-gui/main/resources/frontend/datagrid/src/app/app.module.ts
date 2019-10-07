import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';
import {DataGridComponent} from "./datagrid/datagrid.component";
import { TableModule } from 'primeng/table';
import {AppRoutingModule,routingComponent} from "./app-routing.module";
import {InputTextModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {PrDataGridService} from "./datagrid/datagrid.service";
import {EditableCell} from "./components/components.cell";



@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    PrDataGridService,
    routingComponent,
    EditableCell

  ],
  imports: [
    AgGridModule.withComponents(null), BrowserModule, HttpClientModule, TableModule, AppRoutingModule, InputTextModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
