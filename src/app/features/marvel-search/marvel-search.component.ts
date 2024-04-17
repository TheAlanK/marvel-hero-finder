import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Marvel } from 'src/app/models/marvel.model';
import { getAdditionalGptInfo, getError, getHeroes, getSelectedHero } from 'src/store/marvel/marvel.selector';
import { isLoading } from 'src/store/loading/loading.selector';
import { searchMarvel, selectMarvel } from 'src/store/marvel/marvel.actions';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';


@Component({
  selector: 'marvel-search',
  templateUrl: './marvel-search.component.html',
  styleUrls: ['./marvel-search.component.scss'],
})
export class MarvelSearchComponent {
  public heroes$: Observable<Marvel[]>;
  public isLoading$: Observable<boolean>;
  public error$: Observable<Error | null>;
  public selectedHero$: Observable<Marvel | null>;
  public additionalGptInfo$: Observable<string | null>;
  public heroDetails$: Observable<{ marvel: Marvel | null; gptInfo: string }>;


  constructor(private store: Store, private analytics: AngularFireAnalytics) {
    this.heroes$ = this.store.select(getHeroes);
    this.isLoading$ = this.store.select(isLoading);
    this.error$ = this.store.select(getError);
    this.selectedHero$ = this.store.select(getSelectedHero);
    this.additionalGptInfo$ = this.store.select(getAdditionalGptInfo);
    this.heroDetails$ = combineLatest([this.selectedHero$, this.additionalGptInfo$]).pipe(
      map(([hero, gptInfo]) => {
        return {
          marvel: hero,
          gptInfo: gptInfo ?? ''
        };
      })
    );
  }

  public displayHero(hero: Marvel): string {
    return hero ? hero.name : '';
  }

  public handleSearch(term: string): void {
    if (term) {
      this.store.dispatch(searchMarvel({ query: term }));
    }
  }

  public handleSelection(hero: Marvel): void {
    if (hero) {
      this.analytics.logEvent('hero_selected', { hero_name: hero.name });
      this.store.dispatch(selectMarvel({ hero }));
    }
  }
}
