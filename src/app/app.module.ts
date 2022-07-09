import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { SidenavSubnavComponent } from './core/sidenav-subnav/sidenav-subnav.component';
import { FooterComponent } from './core/footer/footer.component';
import { DevelopmentComponent } from './development/development.component';
import { DevDialogComponent } from './dev-dialog/dev-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavSubnavComponent,
    FooterComponent,
    DevelopmentComponent,
    DevDialogComponent
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
