import { all, put, takeLatest } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { makeCollectionStart, makeCollectionSuccess } from './collection.action';
import { makeCollectionsAPI } from './collection.api';

function* makeCollectionSaga(action: ReturnType<typeof makeCollectionStart>) {
  try {
    const { body } = yield call(makeCollectionsAPI, action.payload);
    console.log(body);
    yield put(makeCollectionSuccess(body));
  } catch (error) {
    console.log(error);
  }
}

export function* watchCollection() {
  yield all([takeLatest(makeCollectionStart.type, makeCollectionSaga)]);
}
