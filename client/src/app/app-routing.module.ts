import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverTripsDetailsComponent } from './driver-trips-details/driver-trips-details.component';
import { DriverTripsListComponent } from './driver-trips-list/driver-trips-list.component';

const routes: Routes = [
  { path: '', component: DriverListComponent },
  { path: 'driver/:driverId', component: DriverDetailsComponent },
  { path: 'driver/:driverId/trip', component: DriverTripsListComponent },
  {
    path: 'driver/:driverId/trip/:tripId',
    component: DriverTripsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
