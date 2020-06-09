import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

import { Broker } from "../model/broker";

@Injectable({
  providedIn: "root",
})
export class BrokerService {
  private brokersUrl = "http://localhost:5000/v1/BrokerList"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(private http: HttpClient) {}

  getBrokers(): Observable<Broker[]> {
    return this.http
      .get<Broker[]>(this.brokersUrl)
      .pipe(catchError(this.handleError<Broker[]>("getBrokers", [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}