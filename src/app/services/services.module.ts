import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    SharedModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
