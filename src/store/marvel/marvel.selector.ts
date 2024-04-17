import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { Marvel } from 'src/app/models/marvel.model';
import { HeroState } from './marvel.state';

// Seletor de feature
const getHeroState = createFeatureSelector<HeroState>('hero');

// Seletor para lista de heróis
export const getHeroes = createSelector(
  getHeroState,
  (state: HeroState) => state.heroes
);

// Seletor para o herói selecionado
export const getSelectedHero: MemoizedSelector<Object, Marvel | null> = createSelector(
  getHeroState,
  (state: HeroState) => state.selectedHero
);

// Seletor para erros
export const getError = createSelector(
  getHeroState,
  (state: HeroState) => state.error
);

// Seletor para lista de filmes do Gpt
export const getAdditionalGptInfo: MemoizedSelector<Object, string | null> = createSelector(
  getHeroState,
  (state: HeroState) => state.additionalGptInfo
);

