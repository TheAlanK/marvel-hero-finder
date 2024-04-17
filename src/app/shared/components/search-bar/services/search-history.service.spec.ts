import { TestBed } from '@angular/core/testing';
import { SearchHistoryService } from './search-history.service';

describe('SearchHistoryService', () => {
  let service: SearchHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchHistoryService]
    });
    service = TestBed.inject(SearchHistoryService);
  });

  afterEach(async () => {
    const db = await service['dbPromise'];
    await db.clear('searches');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a search term to the database', async () => {
    const term = 'example search';
    await service.addSearch(term);
    const searches = await service.getSearches();
    expect(searches).toContain(term);
  });

  it('should retrieve all search terms from the database', async () => {
    const terms = ['search1', 'search2', 'search3'];
    for (const term of terms) {
      await service.addSearch(term);
    }
    const searches = await service.getSearches();
    expect(searches).toEqual(terms);
  });
});
