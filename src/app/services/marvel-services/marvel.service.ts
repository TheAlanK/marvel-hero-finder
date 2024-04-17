import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Marvel } from '../../models/marvel.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MarvelService {
  private apiKey = 'c6eeaf95a1c271076f9509fabf3fa31e';
  private apiUrl = 'https://gateway.marvel.com:443/v1/public/characters';

  constructor(private http: HttpClient) {}

  public searchMarvel(query: string): Observable<Marvel[]> {
    const params = new HttpParams().set('apikey', this.apiKey).set('nameStartsWith', query);
    return this.http.get<{ data: { results: Marvel[] } }>(this.apiUrl, { params })
      .pipe(map(response => response.data.results));
  }


}
