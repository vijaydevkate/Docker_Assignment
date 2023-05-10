import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './helper/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverTripsListComponent } from './driver-trips-list/driver-trips-list.component';
import { DriverTripsDetailsComponent } from './driver-trips-details/driver-trips-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    DriverListComponent,
    DriverDetailsComponent,
    DriverTripsListComponent,
    DriverTripsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
