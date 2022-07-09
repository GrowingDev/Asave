import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { ActionsComponent } from './actions/actions.component';
import { SingleWordPipe } from '../shared/pipes/singleWord.pipe';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SliderItemComponent } from './slider/slider-item/slider-item.component';
import {CdkStepperModule} from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ActionsComponent,
    SingleWordPipe,
    HeaderComponent,
    SliderComponent,
    SliderItemComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    CdkStepperModule,
  ]
})
export class HomeModule { }
