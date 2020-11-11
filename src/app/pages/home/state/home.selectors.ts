

import {createFeatureSelector, createSelector} from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector('home');

export const selectorHomeText = createSelector(
  selectHomeState,
  (homeState: HomeState)=> homeState.text,
);
