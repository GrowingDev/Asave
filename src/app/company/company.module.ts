import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    SharedModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
