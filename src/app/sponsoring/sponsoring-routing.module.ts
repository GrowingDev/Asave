import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsoringComponent } from './sponsoring.component';

const routes: Routes = [{ path: '', component: SponsoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsoringRoutingModule { }
