import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import {
  fetchMyCollectionStart,
  fetchMyCollectionSuccess,
  fetchMyInfoSuccess,
  fetchMyPieceStart,
  fetchMyPieceSuccess
} from './myPage.action';
import {
  fetchMyPieceAPI,
  fetchMyCollectionAPI,
  fetchMyInfoAPI,
  MyInfoResponse
} from './myPage.api';

function* fetchMyPieceSaga() {
  try {
    const { body } = yield call(fetchMyPieceAPI);
    console.log(body);
    yield put(fetchMyPieceSuccess(body));
  } catch (error) {
    console.log(error);
  }
}
function* fetchMyCollectionSaga() {
  try {
    const userInfo: MyInfoResponse = yield* call(fetchMyInfoAPI);
    yield put(fetchMyInfoSuccess(userInfo.body));
    const { body } = yield call(fetchMyCollectionAPI, userInfo.body.kakaoId);
    console.log(body);
    yield put(fetchMyCollectionSuccess(body));
  } catch (error) {
    console.log(error);
  }
}

export function* watchMyPage() {
  yield all([
    takeLatest(fetchMyPieceStart.type, fetchMyPieceSaga),
    takeLatest(fetchMyCollectionStart.type, fetchMyCollectionSaga)
  ]);
}
