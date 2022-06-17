import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,

  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,

  ]
})
export class SharedModule { }
