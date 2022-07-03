import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderRequestComponent } from './components/order-request/order-request.component';

const routes: Routes = [
  {path: '', component: OrderRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRequestRoutingModule { }
