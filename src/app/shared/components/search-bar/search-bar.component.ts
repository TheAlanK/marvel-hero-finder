import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchHistoryService } from './services/search-history.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('trigger', { read: MatAutocompleteTrigger }) autocompleteTrigger: MatAutocompleteTrigger = {} as MatAutocompleteTrigger;
  @Output() searchTermChange = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<any>();
  @Input() options: any[] | null = [];
  @Input() isLoading: boolean | null = false;
  @Input() displayWith: ((value: any) => string) | null = null;
  searchControl = new FormControl();

  constructor(private searchHistoryService: SearchHistoryService) {}

  public ngOnInit(): void {
    this.loadSearchHistory();

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      tap(value => {
        if (!value) {
          this.loadSearchHistory();
        } else {
          this.options = [];
        }
      }),
      distinctUntilChanged()
    ).subscribe(value => {
      if (value) {
        this.searchTermChange.emit(value);
      }
    });
  }

  public loadSearchHistory(): void {
    this.searchHistoryService.getSearches().then(history => {
      this.options = history.slice(-5);
      this.options.forEach(option => {
        option.isHistory = true;
      });
    });
  }

  public onSelect(value: any): void {
    console.log('Selected value:', value);
    this.selectionChange.emit(value);
    this.searchControl.setValue(this.displayWith ? this.displayWith(value) : value, { emitEvent: false });
    this.searchHistoryService.addSearch(value);
  }

  public clearSearch(): void {
    this.searchControl.reset('', { emitEvent: false });
    this.loadSearchHistory();
  }

  public onBlur(): void {
    if (!this.searchControl.value) {
      this.loadSearchHistory();
    }
  }
}
