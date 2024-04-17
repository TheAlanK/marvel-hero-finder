import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Marvel } from '../../models/marvel.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MarvelService {
  private apiKey = environment.marvel.apiKey;
  private apiUrl = environment.marvel.apiUrl;

  constructor(private http: HttpClient) {}

  public searchMarvel(query: string): Observable<Marvel[]> {
    const params = new HttpParams().set('apikey', this.apiKey).set('nameStartsWith', query);
    return this.http.get<{ data: { results: Marvel[] } }>(this.apiUrl, { params })
      .pipe(map(response => response.data.results));
  }


}
