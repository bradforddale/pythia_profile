import { Injectable } from '@angular/core';
import { Profile } from '../models/Profile';
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
    // return of({id: "123", personalInfo: {fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423"}, awards: [], positions: []});
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}_ERROR: ${JSON.stringify(error)}`);
      return of(result as T);
    };
  }
}
