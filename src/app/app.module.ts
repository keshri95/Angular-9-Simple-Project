import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HouseComponent } from './components/house/house.component';
import { ParkingComponent } from './components/parking/parking.component';
import { PropertyComponent } from './components/property/property.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    ParkingComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
