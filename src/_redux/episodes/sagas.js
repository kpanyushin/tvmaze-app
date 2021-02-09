import { call, takeLatest, put, all } from 'redux-saga/effects';

import {
  fetchEpisodes,
  fetchEpisodesError,
  fetchEpisodesSuccess,
} from './slice';

import { fetchEpisodes as fetchEpisodesApi } from '../../api';

export function* fetchEpisodesSaga({ payload }) {
  try {
    const result = yield call(() => fetchEpisodesApi(payload));
    yield put(fetchEpisodesSuccess(result.data));
  } catch (e) {
    yield put(fetchEpisodesError());
  }
}

export default function* episodesSaga() {
  yield all([takeLatest(fetchEpisodes, fetchEpisodesSaga)]);
}
