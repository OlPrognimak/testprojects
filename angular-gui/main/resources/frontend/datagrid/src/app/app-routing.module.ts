import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataGridComponent} from "./datagrid/datagrid.component";
import {PrimeDataGridComponent} from "./pdatagrid/pdatagrid.component";

const routes: Routes = [
    {path: 'ng-data-table',  component: DataGridComponent},
    {path: 'prime-data-table', component: PrimeDataGridComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
export  const routingComponent =[DataGridComponent,PrimeDataGridComponent]
