import { call, takeLatest, put, all } from 'redux-saga/effects';

import { fetchShow, fetchShowSuccess, fetchShowError } from './slice';

import { fetchShow as fetchShowApi } from '../../api';

export function* fetchShowSaga({ payload }) {
  try {
    const result = yield call(() => fetchShowApi(payload));
    yield put(fetchShowSuccess(result.data));
  } catch (e) {
    yield put(fetchShowError());
  }
}

export default function* showsSaga() {
  yield all([takeLatest(fetchShow, fetchShowSaga)]);
}
