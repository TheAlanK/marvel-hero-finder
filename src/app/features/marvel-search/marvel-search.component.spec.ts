import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarvelSearchComponent } from './marvel-search.component';
import { Store, StoreModule } from '@ngrx/store';
import { Marvel } from 'src/app/models/marvel.model';
import { searchMarvel, selectMarvel } from 'src/store/marvel/marvel.actions';
import { marvelMock } from 'src/app/tests/mocks/marvel.mock';
import { MarvelDetailsComponent } from './marvel-details/marvel-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { FirebaseApp } from '@angular/fire/compat';
import { FirebaseAppModule } from '@angular/fire/app';

class FirebaseMock {
    logEvent(event: string, data: any): void {
    };
}

describe('MarvelSearchComponent', () => {
  let component: MarvelSearchComponent;
  let fixture: ComponentFixture<MarvelSearchComponent>;
  let storeMock: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    storeMock = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), SharedModule, HttpClientTestingModule, MarvelDetailsComponent, NoopAnimationsModule, FirebaseAppModule],
      declarations: [MarvelSearchComponent],
      providers: [{ provide: Store, useValue: storeMock },
      { provide: AngularFireAnalytics, useValue: new FirebaseMock() }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display hero name', () => {
    const mockHero: Marvel = marvelMock;
    const displayName = component.displayHero(mockHero);
    expect(displayName).toBe('Test Marvel');
  });

  it('should dispatch searchMarvel action on handleSearch', () => {
    const mockTerm = 'Iron Man';
    component.handleSearch(mockTerm);
    expect(storeMock.dispatch).toHaveBeenCalledWith(searchMarvel({ query: mockTerm }));
  });

  it('should dispatch selectMarvel action on handleSelection', () => {
    const mockHero: Marvel = marvelMock;
    component.handleSelection(mockHero);
    expect(storeMock.dispatch).toHaveBeenCalledWith(selectMarvel({ hero: mockHero }));
  });
});
