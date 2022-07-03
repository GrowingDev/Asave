import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRequestRoutingModule } from './order-request-routing.module';
import { OrderRequestComponent } from './components/order-request/order-request.component';


@NgModule({
  declarations: [
    OrderRequestComponent
  ],
  imports: [
    CommonModule,
    OrderRequestRoutingModule
  ]
})
export class OrderRequestModule { }
