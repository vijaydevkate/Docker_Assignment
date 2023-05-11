import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverService } from '../helper/driver.service';

@Component({
  selector: 'app-driver-trips-details',
  templateUrl: './driver-trips-details.component.html',
  styleUrls: ['./driver-trips-details.component.css'],
})
export class DriverTripsDetailsComponent {
  driverTripDetails: any;
  error: any;
  driverId: any;
  tripId: any;

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.driverId = this.route.snapshot.paramMap.get('driverId');
    this.tripId = this.route.snapshot.paramMap.get('tripId');
    this.getDriverTripsDetails();
  }

  getDriverTripsDetails() {
    this.driverService
      .getDriverTripDetails(this.driverId, this.tripId)
      .subscribe({
        next: (res) => {
          this.driverTripDetails = res;
        },
        error: (err) => {
          this.error = err;
          return err;
        },
      });
  }
}
