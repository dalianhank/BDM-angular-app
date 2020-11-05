import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

import { Broker } from "../model/broker";


@Injectable({
  providedIn: "root",
})
export class BrokerService {
  private brokersUrl = "https://localhost:5001/Clients/ABC"; // URL to web api
  private token = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({     
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }; 

  constructor(private http: HttpClient) {}

  getBrokers(): Observable<Broker[]> {
    return this.http
      .get<Broker[]>(this.brokersUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Broker[]>("getBrokers", [])));
  }

  addBroker(broker: Broker): Observable<Broker>{
    var updateBrokerUrl = 'https://localhost:5001/Clients/' + broker.clientName + '/NPN/' + broker.npn; 
    return this.http.post<Broker>(updateBrokerUrl, broker, this.httpOptions)
          .pipe(catchError(this.handleError<Broker>("updateBroker", broker)));
  }

  updateBroker(broker: Broker): Observable<Broker>{
    var updateBrokerUrl = 'https://localhost:5001/Clients/' + broker.clientName + '/NPN/' + broker.npn; 
    return this.http.put<Broker>(updateBrokerUrl, broker, this.httpOptions)
          .pipe(catchError(this.handleError<Broker>("updateBroker", broker)));
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
