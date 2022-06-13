import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public baseurl = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }
  getCountries() {
    return this.http.get(`${this.baseurl}all`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError(() =>'Something is wrong on the server');
        }
        return throwError(() =>'Ups something went wrong');
      })
    );
  };
  getCountryForName(countryName: string) {
    return this.http.get(`${this.baseurl}name/${countryName}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError(() =>'Something is wrong on the server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(() =>'The country was not found');
        }
        return throwError(() =>'Ups something went wrong');
      })
    );
  }
  getContinent(continent: string) {
    return this.http.get(`${this.baseurl}region/${continent}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError(() =>'Something is wrong on the server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(() =>'The continent does not exist');
        }
        return throwError(() =>'Ups something went wrong');
      })
    );
  }
}
