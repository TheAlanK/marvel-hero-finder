import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { SearchHistoryService } from './services/search-history.service';
import { SharedModule } from '@shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      declarations: [SearchBarComponent],
      providers: [SearchHistoryService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load search history on initialization', () => {
    spyOn(component, 'loadSearchHistory');
    component.ngOnInit();
    expect(component.loadSearchHistory).toHaveBeenCalled();
  });

  it('should emit search term change event when search control value changes', (done) => {
    const searchTerm = 'test';
    component.searchTermChange.subscribe((term) => {
      expect(term).toBe(searchTerm);
      done();
    });
    component.searchControl.setValue(searchTerm);
  });

  it('should load search history when search control value is empty', () => {
    spyOn(component, 'loadSearchHistory');
    component.searchControl.setValue('');
    component.onBlur();
    expect(component.loadSearchHistory).toHaveBeenCalled();
  });

});
