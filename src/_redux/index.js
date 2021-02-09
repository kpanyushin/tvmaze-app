import { all } from 'redux-saga/effects';

import showsReducer from './shows/slice';
import episodesReducer from './episodes/slice';

import showsSagas from './shows/sagas';
import episodesSagas from './episodes/sagas';

export function createRootReducer() {
  return {
    shows: showsReducer,
    episodes: episodesReducer,
  };
}

export function* rootSaga() {
  yield all([showsSagas(), episodesSagas()]);
}
