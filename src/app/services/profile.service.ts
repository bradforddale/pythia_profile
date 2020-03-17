import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private pythiaServicesUrl = 'http://localhost:8080/pythia_services/profile';

  httpOptions = {
    // 'Content-Type': 'application/json',
    headers: new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*' 
      })
  };

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.pythiaServicesUrl}/`, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError<Profile[]>('GET_ProfileS', []))
    )
  }

  getProfile(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.pythiaServicesUrl}/${id}`, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError<Profile>('GET_Profile', null))
    )
  }

  create(newProfileDetails: any): Observable<any> {
    return this.http.post(`${this.pythiaServicesUrl}/`,newProfileDetails, this.httpOptions).pipe(
      catchError(this.handleError<any>('CREATE_Profile', "An error occurred trying to create the profile"))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}_ERROR: ${JSON.stringify(error)}`);
      return of(result as T);
    };
  }
}
