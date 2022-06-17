import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    SharedModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
