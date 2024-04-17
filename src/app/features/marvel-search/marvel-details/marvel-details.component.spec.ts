import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarvelDetailsComponent } from './marvel-details.component';
import { Marvel } from 'src/app/models/marvel.model';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MarvelDetailsComponent', () => {
  let component: MarvelDetailsComponent;
  let fixture: ComponentFixture<MarvelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, NoopAnimationsModule, MarvelDetailsComponent],
      teardown: { destroyAfterEach: false }
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle expanded property', () => {
    expect(component.expanded).toBeFalse();
    component.toggleText();
    expect(component.expanded).toBeTrue();
    component.toggleText();
    expect(component.expanded).toBeFalse();
  });

  it('should return the correct link', () => {
      const marvel: Marvel = {
        id: '1',
        name: 'Test Marvel',
        description: 'Test Description',
        modified: '2022-01-01',
        thumbnail: {
          path: 'https://example.com/path',
          extension: 'jpg'
        },
        resourceURI: 'https://example.com/resource',
        comics: {
          available: 1,
          collectionURI: 'https://example.com/comics',
          items: [
            {
              resourceURI: 'https://example.com/comic1',
              name: 'Comic 1'
            }
          ]
        },
        series: {
          available: 1,
          collectionURI: 'https://example.com/series',
          items: [
            {
              resourceURI: 'https://example.com/series1',
              name: 'Series 1'
            }
          ]
        },
        stories: {
          available: 1,
          collectionURI: 'https://example.com/stories',
          items: [
            {
              resourceURI: 'https://example.com/story1',
              name: 'Story 1',
              type: 'Story Type'
            }
          ]
        },
        events: {
          available: 1,
          collectionURI: 'https://example.com/events',
          items: [
            {
              resourceURI: 'https://example.com/event1',
              name: 'Event 1'
            }
          ]
        },
        urls: [
          { type: 'detail', url: 'https://example.com/detail' },
          { type: 'comiclink', url: 'https://example.com/comiclink' },
          { type: 'wiki', url: 'https://example.com/wiki' }
        ],
        additionalInfo: 'Additional Info'
      };
    const type = 'comiclink';
    const expectedLink = 'https://example.com/comiclink';

    marvel.urls = [
      { type: 'detail', url: 'https://example.com/detail' },
      { type: 'comiclink', url: expectedLink },
      { type: 'wiki', url: 'https://example.com/wiki' }
    ];

    const link = component.getLink(marvel, type);
    expect(link).toBe(expectedLink);
  });
});
