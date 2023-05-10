import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../helper/driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css'],
})
export class DriverDetailsComponent {
  driverDetails: any;
  error: any;
  driverId: any;

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.driverId = this.route.snapshot.paramMap.get('driverId');
    this.getDriverDetails();
  }

  getDriverDetails() {
    this.driverService.getDriverById(this.driverId).subscribe({
      next: (res) => {
        this.driverDetails = res;
      },
      error: (err) => {
        this.error = err;
        return err;
      },
    });
  }

  redirectToTrips() {
    this.router.navigate([`/driver/${this.driverId}/trip`]);
  }
}
