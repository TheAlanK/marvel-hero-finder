import { createReducer, on } from '@ngrx/store';
import { HeroState } from './marvel.state';
import { additionalGptInfo, additionalGptInfoSuccess, clearAdditionalGptInfo, searchMarvel, searchMarvelFailure, searchMarvelSuccess, selectMarvel } from './marvel.actions';

export const initialState: HeroState = {
  heroes: [],
  selectedHero: null,
  error: null,
  additionalGptInfo: null
};

export const heroReducer = createReducer(
  initialState,
  on(searchMarvel, state => ({ ...state, error: null })),
  on(searchMarvelSuccess, (state, { heroes }) => ({ ...state,  heroes })),
  on(searchMarvelFailure, (state, { error }) => ({ ...state,  error })),
  on(selectMarvel, (state, { hero }) => ({ ...state, selectedHero: hero })),
  on(clearAdditionalGptInfo, state => ({ ...state, additionalGptInfo: null })),
  on(additionalGptInfo, (state, { additionalInfo }) => {return { ...state, additionalGptInfo: additionalInfo }}),
  on(additionalGptInfoSuccess, (state, { additionalInfo }) => ({ ...state, additionalGptInfo: additionalInfo }))
);

