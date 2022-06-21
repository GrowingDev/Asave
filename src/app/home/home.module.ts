import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { ActionsComponent } from './actions/actions.component';
import { SingleWordPipe } from '../shared/pipes/singleWord.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ActionsComponent,
    SingleWordPipe
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
