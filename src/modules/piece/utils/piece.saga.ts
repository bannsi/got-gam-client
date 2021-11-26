import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import {
  fetchKeywordsStart,
  fetchKeywordsSuccess,
  fetchWhosStart,
  fetchWhosSuccess
} from './piece.action';
import { fetchKeywordsAPI, fetchWhosAPI } from './piece.api';

function* fetchKeywordsSaga() {
  try {
    const { body } = yield call(fetchKeywordsAPI);
    yield put(fetchKeywordsSuccess(body));
  } catch (error) {
    console.log(error);
  }
}
function* fetchWhosSaga() {
  try {
    const { body } = yield call(fetchWhosAPI);
    yield put(fetchWhosSuccess(body));
  } catch (error) {
    console.log(error);
  }
}

export function* watchPiece() {
  yield all([takeLatest(fetchKeywordsStart.type, fetchKeywordsSaga)]);
  yield all([takeLatest(fetchWhosStart.type, fetchWhosSaga)]);
}
