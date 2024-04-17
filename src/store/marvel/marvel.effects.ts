import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MarvelService } from 'src/app/services/marvel-services/marvel.service';
import { additionalGptInfoSuccess, clearAdditionalGptInfo, searchMarvel, searchMarvelFailure, searchMarvelSuccess, selectMarvel } from './marvel.actions';
import { setLoading } from '../loading/loading.actions';
import { OpenaiService } from 'src/app/services/openai-services/openai.service';

@Injectable()
export class MarvelEffects {

  constructor(
    private actions$: Actions,
    private marvelService: MarvelService,
    private openAiService: OpenaiService,
    private store: Store
  ) {}


  searchMarvel$ = createEffect(() => this.actions$.pipe(
    ofType(searchMarvel),
    tap(() => this.store.dispatch(setLoading({ status: true }))),
    switchMap(action =>
      this.marvelService.searchMarvel(action.query).pipe(
        map(heroes => searchMarvelSuccess({ heroes })),
        tap(() => this.store.dispatch(setLoading({ status: false }))),
        catchError(error => {
          this.store.dispatch(setLoading({ status: false }));
          return of(searchMarvelFailure({ error }));
        })
      )
    )
  ));

  fetchGptInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectMarvel),
      tap(() => {
        this.store.dispatch(setLoading({ status: true }));
        this.store.dispatch(clearAdditionalGptInfo());
      }),
      switchMap(action =>
        this.openAiService.getMarvelDetails(action.hero.name).pipe(
          map(gptInfo => additionalGptInfoSuccess({ additionalInfo: gptInfo })),
          tap(() => this.store.dispatch(setLoading({ status: false }))),
          catchError(error => {
            this.store.dispatch(setLoading({ status: false }));
            return of(searchMarvelFailure({ error }));
          })
        )
      )
    )
  );
}
