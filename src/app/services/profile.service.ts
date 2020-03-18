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
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
      })
  };

  getAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.pythiaServicesUrl}/`, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError<Profile[]>('GET_ProfileS', []))
    )
  }

  get(id: string): Observable<Profile> {
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

  update(id: string, updatedProfile: Profile): Observable<any> {
    return this.http.put(`${this.pythiaServicesUrl}/${updatedProfile.id}`,updatedProfile, this.httpOptions).pipe(
      catchError(this.handleError<any>('UPDATE_Profile', "An error occurred trying to update the profile"))
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.pythiaServicesUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError<any>('DELETE_Profile', "An error occurred trying to delete the profile"))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}_ERROR: ${JSON.stringify(error)}`);
      return of(result as T);
    };
  }
}
