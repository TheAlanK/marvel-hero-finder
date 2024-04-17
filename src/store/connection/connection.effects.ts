import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fromEvent, merge, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { checkConnectionFailure, checkConnectionStart, checkConnectionSuccess } from './connection.actions';

@Injectable()
export class ConnectionEffects {
  checkConnection$ = createEffect(() => this.actions$.pipe(
    ofType(checkConnectionStart),
    switchMap(() =>
      merge(
        of(navigator.onLine),
        fromEvent(window, 'online').pipe(map(() => true)),
        fromEvent(window, 'offline').pipe(map(() => false))
      ).pipe(
        map(isConnected => isConnected ? checkConnectionSuccess() : checkConnectionFailure({ error: 'No network connection' }))
      )
    )
  ));

  constructor(private actions$: Actions) {}
}
