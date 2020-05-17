import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AlertComponent } from './alert/alert.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    MenuComponent,
    AlertComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  exports: [
    MenuComponent,
    AlertComponent
  ]
})
export class SharedModule { }
