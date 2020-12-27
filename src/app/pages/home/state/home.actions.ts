import {createAction, props} from '@ngrx/store';
import { Bookmark } from 'src/app/shared/models/bookmark.model';

export const loadCurrentWeather = createAction(
  '[Home] Load Current Wheather',
  props<{query: string}>(),
);

export const loadCurrentWeatherSuccess = createAction(
  '[Weather API] Load Current Wheather Success',
  props<{entity: any}>(),
);

export const loadCurrentWeatherFailed = createAction(
  '[Weather API] Load Current Wheather Failed',
);

export const toggleBookmark = createAction(
  '[Home] Toggle Bookmark',
  props<{entity: Bookmark}>(),
)

export const clearHomeState = createAction(
  '[Home] Clear HomeState',
)
