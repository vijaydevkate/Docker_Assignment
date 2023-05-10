import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  apiUrl = environment.API_URL + 'driver';
  constructor(private http: HttpClient) {}

  getDrivers(): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        map((res) => res),
        catchError((err: any) => {
          return throwError(() => err);
        })
      );
  }

  getDriverById(driverId: any): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/${driverId}`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        map((res) => res),
        catchError((err: any) => {
          return throwError(() => err);
        })
      );
  }

  getDriverTrips(driverId: any): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/${driverId}/trip`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        map((res) => res),
        catchError((err: any) => {
          return throwError(() => err);
        })
      );
  }

  getDriverTripDetails(driverId: any, tripId: any): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/${driverId}/trip/${tripId}`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        map((res) => res),
        catchError((err: any) => {
          return throwError(() => err);
        })
      );
  }
}
