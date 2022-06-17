import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsoringRoutingModule } from './sponsoring-routing.module';
import { SponsoringComponent } from './sponsoring.component';


@NgModule({
  declarations: [
    SponsoringComponent
  ],
  imports: [
    CommonModule,
    SponsoringRoutingModule
  ]
})
export class SponsoringModule { }
