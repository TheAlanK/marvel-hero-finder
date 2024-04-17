import { createAction, props } from '@ngrx/store';

export const checkConnectionStart = createAction('[Connection] Check Start');
export const checkConnectionSuccess = createAction('[Connection] Check Success');
export const checkConnectionFailure = createAction(
  '[Connection] Check Failure',
  props<{ error: string }>()
);
