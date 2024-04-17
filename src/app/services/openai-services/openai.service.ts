import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { OpenAICacheService } from './openai-cache.service';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private openAiApiKey = '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';
  private openAiUrl = 'https://api.openai.com/v1/chat/completions';
  private navigatorLanguage = navigator.language || 'pt-BR';

  constructor(private http: HttpClient, private openAiCacheService: OpenAICacheService) { }

  // TODO: Implementar a internacionalização
  public getMarvelDetails(marvelName: string): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.openAiApiKey}`,
      'Content-Type': 'application/json'
    });
    const body = {
      model: "gpt-4-turbo",
      messages: [{
        role: "system",
        content: `Generate brief description for Marvel character ${marvelName}
                  Lang: pt-BR
                  Written-style: narrative
                  Avoid words: 'Marvel'
                  Content: about ${marvelName}
                  end with: 'In the movies, ${marvelName} appeared in <movie name> - <year>, <movie name> - <year>' {if more than 5 movies, end with: 'and more.', otherwise, end with: '.'}
                  if no movies, end with: '${marvelName} did not appear in any movies yet.'
                  All output must be in pt-BR language, including the previous instructions.
                  Response size: maximum 500 characters
                  `
      }],
      max_tokens: 500,
      temperature: 0.7
    };
    return from(this.openAiCacheService.getCache(marvelName)).pipe(
      switchMap(cachedResponse => {
        if (cachedResponse) {
          return of(cachedResponse.choices[0].message.content);
        } else {
          return this.http.post<any>(this.openAiUrl, body, { headers }).pipe(
            tap(response => {
              this.openAiCacheService.setCache(marvelName, response).catch(error => {
                console.error('Error caching response:', error);
              });
            }),
            map(response => response.choices[0].message.content),
            catchError(error => {
              console.error('Error fetching from OpenAI API:', error);
              throw error;
            })
          );
        }
      })
    );
  }

}
