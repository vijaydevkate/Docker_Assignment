import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DriverService } from '../helper/driver.service';

@Component({
  selector: 'app-driver-trips-list',
  templateUrl: './driver-trips-list.component.html',
  styleUrls: ['./driver-trips-list.component.css'],
})
export class DriverTripsListComponent {
  driverTripList: any;
  error: any;
  dataSource: any;
  driverId: any;
  displayedColumns: string[] = [
    'startTime',
    'endTime',
    'passengers',
    'actions',
  ];

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.driverId = this.route.snapshot.paramMap.get('driverId');
    this.getDriverTripList();
    this.dataSource = new MatTableDataSource(this.driverTripList);
  }

  getDriverTripList() {
    this.driverService.getDriverTrips(this.driverId).subscribe({
      next: (res: any) => {
        this.driverTripList = res;
      },
      error: (err: any) => {
        this.error = err;
        return err;
      },
    });
  }
}
