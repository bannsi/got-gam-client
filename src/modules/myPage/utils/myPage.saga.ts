import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { fetchMyPieceStart, fetchMyPieceSuccess } from './myPage.action';
import { fetchMyPieceAPI } from './myPage.api';

function* fetchMyPieceSaga() {
  try {
    const { body } = yield call(fetchMyPieceAPI);
    console.log(body);
    yield put(fetchMyPieceSuccess(body));
  } catch (error) {
    console.log(error);
  }
}

export function* watchMyPage() {
  yield all([takeLatest(fetchMyPieceStart.type, fetchMyPieceSaga)]);
}
