import { Component } from '@angular/core';
import { DriverService } from '../helper/driver.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-driver',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent {
  driverList: any;
  error: any;
  dataSource: any;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'phone',
    'email',
    'actions',
  ];

  constructor(private driverService: DriverService) {}
  ngOnInit(): void {
    this.getDriverList();
    this.dataSource = new MatTableDataSource(this.driverList);
  }

  getDriverList() {
    this.driverService.getDrivers().subscribe({
      next: (res) => {
        this.driverList = res;
      },
      error: (err) => {
        this.error = err;
        return err;
      },
    });
  }
}
