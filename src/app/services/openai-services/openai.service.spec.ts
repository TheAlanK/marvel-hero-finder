import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { OpenaiService } from './openai.service';
import { OpenAICacheService } from './openai-cache.service';

describe('OpenaiService', () => {
  let service: OpenaiService;
  let httpMock: HttpTestingController;
  let cacheService: OpenAICacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenaiService, OpenAICacheService]
    });
    service = TestBed.inject(OpenaiService);
    httpMock = TestBed.inject(HttpTestingController);
    cacheService = TestBed.inject(OpenAICacheService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return cached response if available', () => {
    const marvelName = 'Iron Man';
    const cachedResponse = {
      choices: [{ message: { content: 'Cached response' } }]
    };
    spyOn(cacheService, 'getCache').and.returnValue(of(cachedResponse).toPromise());

    service.getMarvelDetails(marvelName).subscribe(response => {
      expect(response).toBe('Cached response');
    });

    expect(cacheService.getCache).toHaveBeenCalledWith(marvelName);
  });

  it('should make HTTP request and cache response if not available in cache', fakeAsync(() => {
    const marvelName = 'Iron Man';
    const expectedResponse = 'Generated response';

    // Ensuring no cache is available
    spyOn(cacheService, 'getCache').and.returnValue(of(null).toPromise());
    spyOn(cacheService, 'setCache').and.returnValue(Promise.resolve());

    service.getMarvelDetails(marvelName).subscribe(response => {
      expect(response).toBe(expectedResponse);
    });

    // Wait for all async operations to complete
    tick();

    const req = httpMock.expectOne(service['openAiUrl']);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${service['openAiApiKey']}`);
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    expect(req.request.body).toEqual({
      model: 'gpt-4-turbo',
      messages: [{
        role: 'system',
        content: `Generate brief description for Marvel character ${marvelName}
                  Lang:${service['navigatorLanguage']}
                  Written-style: narrative
                  Avoid words: 'Marvel'
                  Content: about ${marvelName}
                  end with: 'In the movies, ${marvelName} appeared in <movie name> - <year>, <movie name> - <year>' {if more than 5 movies, end with: 'and more.', otherwise, end with: '.'}
                  if no movies, end with: '${marvelName} did not appear in any movies yet.'
                  All output must be in ${service['navigatorLanguage']} language, including the previous instructions.
                  Response size: maximum 500 characters
                  `
      }],
      max_tokens: 500,
      temperature: 0.7
    });

    req.flush({ choices: [{ message: { content: expectedResponse } }] });

    // Verify caching was invoked
    expect(cacheService.setCache).toHaveBeenCalledWith(marvelName, { choices: [{ message: { content: expectedResponse } }] });
  }));

});
