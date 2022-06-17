import { NgModule } from '@angular/core';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ReferencesComponent
  ],
  imports: [
    SharedModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
