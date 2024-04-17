import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoadingState } from './loading.state';

export const selectLoadingFeature = createFeatureSelector<LoadingState>('loading');

export const isLoading = createSelector(
  selectLoadingFeature,
  (state: LoadingState) => state.loading
);
